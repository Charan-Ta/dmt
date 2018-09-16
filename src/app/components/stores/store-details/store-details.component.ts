import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  public navtab = 0;
  constructor() { }

  ngOnInit() {
  }

  changeTab(value) {
    this.navtab = value;
  }

}
