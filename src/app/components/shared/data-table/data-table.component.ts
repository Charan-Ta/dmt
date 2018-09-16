import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetails() {
    this.router.navigateByUrl('/stores/store-details');
  }

}
