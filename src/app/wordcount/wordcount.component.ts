import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcount',
  templateUrl: './wordcount.component.html',
  styleUrls: ['./wordcount.component.css']
})
export class WordcountComponent {
  txt:string=""
  wrd:any={}

  wrdcnt(){
    this.txt.split(" ").forEach(w=>w in this.wrd?this.wrd[w]+=1:this.wrd[w]=1)
    console.log(this.wrd)
  }
}
