import { Group } from './group.model';

export class Course {
  id: string;
  name: string;
  code: string;
  groups: Group[];

  constructor(course: any) {
    this.id = course.id;
    this.name = course.name;
    this.code = course.code;
    this.groups = course.groups;
  }
}
