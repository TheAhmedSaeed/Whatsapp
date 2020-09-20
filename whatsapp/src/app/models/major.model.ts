import { Course } from './course.model';

export class Major {
  id: string;
  name: string;
  code: string;
  courses: Course[];
}
