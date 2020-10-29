import { Input,Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  //imgPath = '../../../assets/images/pic1.jpg';
  // txtCard = 'SOME TEXT';
  
  @Input() imgPath;
  @Input() txtCard;


  constructor() { }

  ngOnInit(): void {
  }

}
