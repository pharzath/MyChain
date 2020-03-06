import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],  
})
export class CardComponent implements OnInit {
  
  @Output() addCommentEvent = new EventEmitter<number>();

  postId:number=0;
  constructor(public popoverController: PopoverController) { }
  
  async ShowCardPopover($event){
    await this.presentPopover($event);
  }
  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      backdropDismiss:true,
      animated: true,
      keyboardClose:true,
      showBackdrop: true 
    });
    return await popover.present();
  }
  ngOnInit() {}
  
  addComment(){
    this.addCommentEvent.emit(this.postId);
  }
}
