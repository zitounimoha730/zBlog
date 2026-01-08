import {Component} from '@angular/core';
import {AbstractCourseComponent} from '../abstract-course.component';

@Component({
  selector: 'zblog-ngxs',
  imports: [],
  template: `
    <h2>Angular 21</h2>
    <h3>Signal Forms</h3>
    <h4>Data model</h4>
    # product-data.ts
    <pre><code>{{ productDataCode }}</code></pre>
    <h4>Form component</h4>
    # product.component.ts
    <pre><code>{{ productComponentCode }}</code></pre>
  `,
})
export class Angular21Component extends AbstractCourseComponent {
  protected productDataCode = `
import {signal, WritableSignal} from '@angular/core';

export interface ProductData {
  ref: string;
  price: number;
  quantity: number;
  dangerProduct: boolean;
}

export const emptyProduct: ProductData = {
  ref: '',
  price: 0,
  quantity: 0,
  dangerProduct: false
}

export const productModel: WritableSignal<ProductData> = signal<ProductData>(emptyProduct);

`;

  protected productComponentCode = `
import {Component, inject, Signal} from '@angular/core';
import {Field, form, max, min, required} from '@angular/forms/signals';
import {emptyProduct, ProductData, productModel} from './models/product-data';
import {ProductService} from './services/product.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  imports: [
    Field,
    JsonPipe
  ],
  styleUrls: ['product.component.scss']
})
export class ProductComponent {
  protected productForm = form(productModel, (schemaPath) => {
    required(schemaPath.ref, {message: 'Ref is required'});
    required(schemaPath.price, {message: 'Price is required'});
    required(schemaPath.quantity, {message: 'Quantity is required'});
    min(schemaPath.price, 0, {message: 'Min price is 0$'});
    min(schemaPath.quantity, 0, {message: 'Min quantity is 0'});
    max(schemaPath.quantity, 1000, {message: 'Max quantity is 1000'});
  });
  protected products$: Signal<ProductData[]>;
  private productService = inject(ProductService);

  constructor() {
    this.products$ = toSignal(this.productService.fetchProducts(), {requireSync: true});
  }

  protected saveProduct() {
    const value = this.productForm().value();
    this.productService.addProduct(value);
    this.productForm().reset(emptyProduct);
  }

  protected reset() {
    this.productForm().reset(emptyProduct);
  }
}
`;
}
