import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';
import randomItems from '../../utils/randomItems';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: [] = null;

  constructor(
    private itemService: ItemService
  ) {
  }

  async ngOnInit() {
    const items = await this.itemService.getItems().toPromise();
    this.items = randomItems(items, 3) as [];
  }

}
