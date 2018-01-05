import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})




export class StarComponent implements OnChanges {
        @Input() rating: number;
        @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // event for component with chosen name ratingClicked
        starWidth: number;
        onClick() {
           this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);
        }

        ngOnChanges(): void {
            this.starWidth = this.rating  * 86 / 5;
        }

}
