export interface MenuItem {
  label: string;
  children?: MenuItem[];
  expanded?: boolean;
}
