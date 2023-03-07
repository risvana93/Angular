import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  res:number=0
  calc(n1:any,n2:any){
    console.log(n1)
    console.log(n2)
    this.res=Number(n1.value)+Number(n2.value)
  }

}
