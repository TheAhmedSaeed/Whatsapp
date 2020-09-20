import { Group, Type } from './../models/group.model';
import { Major } from './../models/major.model';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss'],
})
export class StudentSearchComponent implements OnInit {
  majors: Major[] = [
    {
      shown: true,
      id: '1',
      name: 'Software Engineering',
      code: 'SWE',

      courses: [
        new Course({
          id: '1',
          name: 'Intro to programming',
          code: 'ICS201',
          groups: new Group({
            id: '1',
            name: 'ICS201 Group',
            description: 'blah blah',
            type: Type.Whatsapp,
            url: 'test.com',
          }),
        }),
        new Course({
          id: '1',
          name: 'Intro to programming',
          code: 'ICS201',
        }),
        new Course({
          id: '1',
          name: 'Intro to programming',
          code: 'ICS201',
        }),
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getIconName(major) {
    return major.shown ? 'arrow_drop_down' : 'arrow_right';
  }
}
