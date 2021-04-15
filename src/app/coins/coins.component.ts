import { Component, OnInit } from '@angular/core';
import { coin_table_columns, mock_coins } from './coins.models';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.sass']
})
export class CoinsComponent implements OnInit {

  public coinData = mock_coins;
  public coinColumns = coin_table_columns;
  constructor() { } 

  ngOnInit(): void {
  }

}
