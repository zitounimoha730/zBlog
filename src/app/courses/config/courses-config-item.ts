import {Java25Component} from '../components/java/java25.component';
import {Angular21Component} from '../components/angular/angular21.component';
import {Angular20Component} from '../components/angular/angular20.component';
import {NgxsComponent} from '../components/angular/ngxs.component';
import {Java24Component} from '../components/java/java24.component';
import {CourseItem} from '../models/courseItem';
import {DesignPatternsComponent} from '../components/design-patterns/design-patterns.component';
import {KafkaPatitionsGroupsComponent} from '../components/kafka/kafka-patitions-groups/kafka-patitions-groups.component';
import {
  KafkaRebalanceOffsetsStreamsComponent
} from '../components/kafka/kafka-rebalance-offsets-streams/kafka-rebalance-offsets-streams.component';
import {UtilCommandsComponent} from '../components/utils/util-commands/util-commands.component';
import { ArchitectJargonComponent } from '../components/utils/architect-jargon/architect-jargon.component';
import { RemarquesComponent } from '../components/utils/remarques/remarques.component';
import { TopicsDeleteAndCompactionComponent } from '../components/kafka/topics-delete-and-compaction/topics-delete-and-compaction.component';

export const ALL_COURSE_CONFIG: CourseItem[] = [
  {
    label: "Angular",
    children: [
      {
        path: 'angular21',
        label: 'Angular 21',
        component: Angular21Component,
        children: []
      },
      {
        path: 'angular20',
        label: 'Angular 20',
        component: Angular20Component,
        children: []
      },
      {
        path: 'ngxs',
        label: 'NgXs',
        component: NgxsComponent,
        children: []
      }
    ]
  },
  {
    label: 'Java',
    children: [{
      path: 'java25',
      label: 'Java 25',
      component: Java25Component,
    },
      {
        path: 'java24',
        label: 'Java 24',
        component: Java24Component,
      }]
  },
  {
    label: 'Kafka',
    children: [{
      path: 'partitions-groups',
      label: 'Kafka Partitions & Groups',
      component: KafkaPatitionsGroupsComponent,
    },{
      path: 'kafka-rebalance-offsets-stream',
      label: 'Rebalance, Offsets, Streams et Design',
      component: KafkaRebalanceOffsetsStreamsComponent,
    }, {
      path: 'topics-delete-and-compaction',
      label: 'Topics Delete and Compaction',
      component: TopicsDeleteAndCompactionComponent,
    }]
  },
  {
    label: 'Utils',
    children: [{
      path: 'util-commands',
      label: 'Commandes utiles',
      component: UtilCommandsComponent,
    },{
    label: 'Architect Jargon',
    path: 'architect-jargon',
    component: ArchitectJargonComponent
  },
  {
    label: 'Remarques',
    path: 'remarques',
    component: RemarquesComponent
  },]
  },
  {
    label: 'Design Patterns',
    path: 'design-patterns',
    component: DesignPatternsComponent
  }
];
