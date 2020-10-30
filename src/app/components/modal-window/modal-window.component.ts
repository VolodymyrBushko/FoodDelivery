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

  item: Item = null;

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

  addToCart(newItem) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(({_id}) => _id === newItem._id);
    const item = cart.slice(index, index + 1)[0];

    if (item) {
      +item['quantity']++;
      cart = [
        ...cart.slice(0, index),
        item,
        ...cart.slice(index + 1)
      ];
    } else {
      newItem.quantity = 1;
      cart.unshift(newItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

}
