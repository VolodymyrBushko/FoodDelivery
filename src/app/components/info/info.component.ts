import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  image: string = '../../../assets/info/Rectangle 15.svg';
  description: string = `М'якість скоринки істинної неаполітанської піци частково походить від приготування при 900 ℉ в дров'яній печі. Повітряні бульбашки в тісті коржа розпухають, внутрішня частина висохла і затверділа. Але тісто саме по собі побудовано таким чином, щоб бути еластичним, при дtодаванні цінних помідорів і моцарелли регіону Кампанія, основа размякає і просочується усіма смаками. "Ви відчуваєте, всі аромати в одному укусі!" - Каже Santarpia.
  Згодом в областях, які знаходяться далеко від Неаполя (як Флоренція) почали випікати дуже схожу до класичної піци Napoletana. Її популярність вийшла за межі міста і розійшлася по всьому світу.`;
  isLeft:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
