import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Output() starRatingClick: EventEmitter<string>;
    starWidth: number;

    constructor(){
        this.starRatingClick = new EventEmitter<string>();
    }

    ngOnChanges(): void {
        this.starWidth = (this.rating * 75)/5;
    }

    handleStarRatingClick(): void{
        this.starRatingClick.emit(`Your selected product's rating is ${this.rating}`);
    }
}