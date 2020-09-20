import { StudentSearchComponent } from './student-search/student-search.component';
import { AdminAddGroupComponent } from './admin-add-group/admin-add-group.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin-add-group',
    component: AdminAddGroupComponent,
  },
  {
    path: 'student-search',
    component: StudentSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
