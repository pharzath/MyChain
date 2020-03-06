import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  ShowGetCommentPanel:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  closeComment(){
    this.ShowGetCommentPanel = false;
  }

  addCommentEventHandler($event){
    this.ShowGetCommentPanel = true;

  }

}
