import { Course } from './course.model';
import { Major } from './major.model';
export class University {
  id: string;
  name: string;
  code: string;
  majors: Major[];
  courses: Course[];

  constructor(uni: any) {
    this.id = uni.id;
    this.name = uni.name;
    this.code = uni.code;
    this.majors = uni.majors;
    this.courses = uni.courses.map((course) => new Course(course));
  }
}
