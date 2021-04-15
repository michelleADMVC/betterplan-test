import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.sass']
})
export class CustomTableComponent implements OnInit {
  @Input() dataSource;
  @Input() columns
  constructor() { }

  ngOnInit(): void {
    console.warn("init table")
  }

}
