import {COURSE_CONFIG_MAP} from '../../../courses/config/courses.config';
import {MenuItem} from '../components/models/menu-item';

export function buildCoursesMenu(): MenuItem[] {
  const entries = Object.entries(COURSE_CONFIG_MAP);
  return entries.map(entr => ({
    label: entr[0],
    expanded: false,
    children: entr[1].map(child => ({
      key: child.key,
      label: child.label,
      expanded: false,
      children: []
    } as MenuItem))
  } as MenuItem))
}
