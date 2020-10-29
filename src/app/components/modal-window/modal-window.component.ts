import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery/dist/jquery.min.js';
import Item from '../../interfaces/Item';
import {ItemService} from '../../services/item.service';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})


export class ModalWindowComponent implements OnInit {

  item: Item =
    {_id: '', name: '', price: 0, category: '', description: '', imageUrl: '', weight: 0};

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const itemId = params['itemId'];
      if (itemId) {
        this.itemService.getItemById(itemId)
          .subscribe(
            (data: Item) => this.item = data,
            err => console.log(err.message || err)
          );
      }
    });
  }

  addToCart(item: Item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

}
