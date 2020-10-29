import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // item;

  constructor(
    private itemService: ItemService
  ) {
  }

  ngOnInit(): void {
    // this.itemService.getItemById('5f9a772fc23e34134458dc81')
    //   .subscribe(
    //     data => {this.item = data;console.log(data)},
    //     err => console.log(err.message || err)
    //   );
  }

}
