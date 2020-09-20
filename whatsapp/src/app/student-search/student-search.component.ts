import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss'],
})
export class StudentSearchComponent implements OnInit {
  majors = [
    {
      shown: true,
      id: 1,
      name: 'SWE',

      courses: [
        {
          id: 1,
          link: 'www.link.com',
          course: 'ICS201',
        },
        {
          id: 2,
          link: 'www.link2.com',
          course: 'ICS301',
        },
        {
          id: 1,
          link: 'www.link3.com',
          course: 'ICS222',
        },
      ],
    },
    {
      id: 1,
      name: 'ICS',
      shown: true,

      courses: [
        {
          id: 1,
          link: 'www.link.com',
          course: 'ICS201',
        },
        {
          id: 2,
          link: 'www.link2.com',
          course: 'ICS301',
        },
        {
          id: 1,
          link: 'www.link3.com',
          course: 'ICS222',
        },
      ],
    },
  ];

  groups = [
    {
      id: 1,
      link: 'www.link.com',
      course: 'ICS201',
    },
    {
      id: 2,
      link: 'www.link2.com',
      course: 'ICS301',
    },
    {
      id: 1,
      link: 'www.link3.com',
      course: 'ICS222',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getIconName(major) {
    return major.shown ? 'arrow_drop_down' : 'arrow_right';
  }
}
