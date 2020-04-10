import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  emptyImageurl = 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

  loaded(e) {
    e.target.src = this.emptyImageurl
  }
}
