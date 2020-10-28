import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';



@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})



export class ModalWindowComponent implements OnInit {

  good = {
    title:"Сік апельсиновий",
    price:20,
    weight:200,
    category:"drinks",
    path:"../../../assets/images/card/orangeJuce.svg",
    description:"Апельсиновий сік — напій, виготовлений з апельсинів. Апельсиновий сік відомий своєю користю для здоров'я, зокрема, через високий вміст вітаміну C. Сік із різних сортів апельсину має різний колір та смак."
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const itemId = params['itemId'];
      console.log(itemId);
    });
  }

  addToBascket(){
  }

}
