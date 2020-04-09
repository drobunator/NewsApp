import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  url = 'https://techcrunch.com/wp-content/uploads/2019/04/bitcoin-bitfinex.jpg?w=750';
  newsUrl = 'https://techcrunch.com/2020/03/12/bitcoin-is-also-having-a-very-very-bad-day/';
  @Input() item;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

}
