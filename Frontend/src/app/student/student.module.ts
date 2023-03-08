import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    StudentComponent,  
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
