import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  pathImg1 = '../../../assets/images/slider/s1.jpg';
  pathImg2 = '../../../assets/images/slider/s2.jpg';
  pathImg3 = '../../../assets/images/slider/s3.jpg';

  constructor() { }

  ngOnInit(): void {
  }
}
