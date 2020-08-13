import { Component, OnInit } from '@angular/core'

import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
    selector: 'ecom-productcatalog',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{
    //ratingMessage: string;
    errorMessage: string;
    //componentTitle: string = 'Product List';
    // imageWidth: number = 50;
    // imageMargine: number = 2;
    // imageIsVisible: boolean = true;
    // private _filterText: string;
    // get filterText(): string{
    //     return this._filterText;
    // }
    // set filterText(value: string){
    //     this._filterText = value;
    //     this.filteredProducts = this.filterText 
    //         ? this.performFilter(this.filterText) 
    //         : this.products;
    // }

    //filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private _productService: ProductService){
        //this.filterText = '';        
    }

    // toggleImage(): void{
    //     this.imageIsVisible = !this.imageIsVisible;
    // }

    // performFilter(filterTextInput: string): IProduct[]{
    //     return this.products.filter((product: IProduct) => 
    //         product.productName.toLocaleLowerCase()
    //         .indexOf(filterTextInput.toLocaleLowerCase()) !== -1);
    // }

    // handleStartRatingClick(message: string){
    //     this.ratingMessage = message;
    // }

    // handleHideItClick(){
    //     this.ratingMessage = '';
    // }
    
    ngOnInit(): void {
        this._productService.getProducts().subscribe({
            next: emittedProducts => {
                this.products = emittedProducts;
                //this.filteredProducts = this.products;
            },
            error: emittedError => this.errorMessage = emittedError
        }); 
        
        console.log(this.products);
    }
}