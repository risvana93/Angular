import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courselist:any;

  constructor(private service:CoursesService)
  {
    this.courselist=service.getcourse()
  }
   
  ddate="05-04-2001"
}
