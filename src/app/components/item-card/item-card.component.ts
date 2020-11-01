import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import Item from '../../interfaces/Item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item;
  route: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route = this.router.url;
  }

}
