import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared-data.service';

interface quantityObj  {
  index: number,
  price: number,
  ItemQuantity : number,
  TotalPrice: number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

constructor(private shareddataservice: SharedDataService){}
 imgArr: string[]=[]
 val=false;
price : any;
count=1;


updatedQty : quantityObj[]=[]
UpdateQuantity(i: number){
this.updatedQty[i].ItemQuantity++
const cost= this.updatedQty[i].price
console.log("this is cost",cost)
this.updatedQty[i].TotalPrice+=cost

console.log(this.updatedQty)
this.count=this.count+1;
this.price=this.price+cost
}
RemoveQuantity(i: number){
  this.count=this.count-1;
 this.updatedQty[i].ItemQuantity--
}


ngOnInit(){
  this.shareddataservice.UpdateCart().subscribe((response)=>{
    for(let items of response){
      this.imgArr.push(items)
      this.val=true
    }
  });
  for(let i=0;i<this.imgArr.length;i++){
    this.updatedQty.push({
      index: i,
      price: i+3,
      ItemQuantity: 1,
      TotalPrice: i+3
    })
  }
this.price = this.updatedQty.reduce((acc, item) => acc + item.TotalPrice, 0);
 // Outputs: 45

  this.count=this.imgArr.length;
  console.log(this.imgArr[0].split('/')[2]);
}
}
