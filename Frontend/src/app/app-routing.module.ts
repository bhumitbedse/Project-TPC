import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () =>
    import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }