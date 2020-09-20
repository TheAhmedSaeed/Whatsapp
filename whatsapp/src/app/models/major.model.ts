import { Course } from './course.model';

export class Major {
  id: string;
  name: string;
  code: string;
  courses: Course[];
  //locally
  shown: boolean;
  constructor(major: any) {
    this.id = major.id;
    this.name = major.name;
    this.code = major.code;
    this.courses = major.courses.map((course) => new Course(course));
    this.shown = true;
  }
}
