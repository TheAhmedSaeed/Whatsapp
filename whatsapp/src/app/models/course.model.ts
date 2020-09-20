import { Group } from './group.model';

export class Course {
  id: string;
  name: string;
  code: string;
  groups: Group[];
}
