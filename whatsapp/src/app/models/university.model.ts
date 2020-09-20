import { Course } from './course.model';
import { Major } from './major.model';
export class University {
  id: string;
  name: string;
  code: string;
  majors: Major[];
  courses: Course[];
}
