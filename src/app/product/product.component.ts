import { Component, OnInit } from '@angular/core';
import { ProsService } from '../services/pros.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  items:any=[]
  constructor(private service:ProsService){

  }

  ngOnInit(): void {
    this.items=this.service.getProducts()
    console.log(this.items)
  }

}
