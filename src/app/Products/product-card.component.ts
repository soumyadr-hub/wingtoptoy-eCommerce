import { Component, Input } from '@angular/core'
import { IProduct } from './IProduct'

@Component({
    selector: 'ecom-productcard',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent{
    @Input() product:IProduct;
}