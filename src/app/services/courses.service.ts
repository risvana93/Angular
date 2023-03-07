import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  courselist:any=[
    {id:101,name:"Python Full Stack",fee:45000,duration:"6 MONTH",rating:5},
    {id:102,name:"DataScience",fee:50000,duration:"6 MONTH",rating:4.5},
    {id:103,name:"Testing",fee:25000,duration:"3 MONTH",rating:4},
    {id:104,name:"Flutter",fee:45000,duration:"4 MONTH",rating:4},
    {id:105,name:"Mean Stack",fee:40000,duration:"5 MONTH",rating:5},
  ]

  getcourse(){
    return this.courselist
  }

  constructor() {}
}
