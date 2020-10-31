import { Input,Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() imgPath;
  @Input() txtCard;
  @Input() txtPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
