import { IProduct } from './IProduct';
import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private _productUrl: string = 'api/products/products.json';

    constructor(private httpClient: HttpClient){
    };

    getProducts(): Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(this._productUrl)
            .pipe(tap(data=>console.log(`All: ${JSON.stringify(data)}`)),
            catchError(this.handleError));
    }

    private handleError(emitedError: HttpErrorResponse){
        let errorMessage = '';
        if(emitedError.error instanceof ErrorEvent){
            errorMessage = `An error occured ${emitedError.error.message}`;
        }        

        errorMessage = emitedError.error instanceof ErrorEvent 
            ? `An error occured ${emitedError.error.message}`
            : `Server returned code: ${emitedError.status}; 
            error message: ${emitedError.message}`;

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}