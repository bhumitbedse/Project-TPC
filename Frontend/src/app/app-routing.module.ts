import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { StudentAuthGuard } from './guards/student-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate:[AdminAuthGuard],
    loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'student',
    canActivate:[StudentAuthGuard],
    loadChildren: () =>
    import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'auth'
  }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
