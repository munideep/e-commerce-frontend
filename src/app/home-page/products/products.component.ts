import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private snackbar : MatSnackBar, private shareddataservice: SharedDataService){}
imagespath='assets/images/'
updatedCartArr: string[]=[]
imageArr=['NIKE+UPLIFT+SC.avif','download.jpg','614aiM56siL._SL1500_.jpg','32_2.webp','PIX_5297copy.webp','NIKE+UPLIFT+SC.avif']
AddtoCart(index: number, image: string){
this.snackbar.open('Added to cart successfully', 'dismiss',{
  duration : 2000
})
let i=index;
let img=this.imagespath+image;
this.updatedCartArr.push(img)
console.log(this.updatedCartArr);
this.shareddataservice.AddtoCart$.next(this.updatedCartArr);
}
}
