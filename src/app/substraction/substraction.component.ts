import { Component } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {
  num1:number=0
  num2:number=0
  res:number=0
  clicked(){
    this.res=Number(this.num1)-Number(this.num2)
  }
  
}  
