import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.models';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.less']
})
export class BillCardComponent implements OnInit {  
  
  @Input() bill:Bill;
  @Input() currency:any;

  dollar: number;
  ruble: number;
  euro: number;
 

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    
    this.ruble = rates['RUB'];
    this.dollar = rates['USD'] ;
    this.euro = rates['EUR'];
   // console.log(this.currency);
  }

}
