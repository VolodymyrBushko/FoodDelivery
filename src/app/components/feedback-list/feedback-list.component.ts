import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

   comentsUserTest=[
     {
      urlimage:"../../../assets/images/aboutUs-feedback/userAva.svg",
      feedback:"some text about food ",
      date:"new Date"
   },{
    urlimage:"../../../assets/images/aboutUs-feedback/userAva.svg",
    feedback:"some text enother description food!!!!",
    date:"new Date"
   },{
    urlimage:"../../../assets/images/aboutUs-feedback/userAva.svg",
    feedback:"some world as new description from user?",
    date:"Date.now()"
   }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
