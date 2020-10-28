import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  choice = 'items';
  array = [{
    imageUrl: '../../../assets/images/item-card/sushi/1.jpg',
    id: 1,
    name: 'апельсиновий сік',
    price: 123
  },
    {
      imageUrl: '../../../assets/images/item-card/sushi/1.jpg',
      id: 2,
      name: 'апельсиновий сік',
      price: 123
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChoice(choice) {
    switch (choice) {
      case 'items': this.array = []; break;
      case 'categories': this.array = []; break;
      case 'orders': this.array = []; break;
      case 'users': this.array = []; break;
    }
    this.choice = choice;
  }

  onUpdate(obj) {
    switch (this.choice) {
      case 'items': /**/ break;
      case 'categories': /**/ break;
      case 'orders': /**/ break;
      case 'users': /**/ break;
    }
  }
  onDelete(id){
    switch (this.choice) {
      case 'items': /**/ break;
      case 'categories': /**/ break;
      case 'orders': /**/ break;
      case 'users': /**/ break;
    }
  }
}
