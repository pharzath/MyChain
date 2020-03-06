import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PopoverComponent } from './popover/popover.component';



@NgModule({
  declarations: [
    CardComponent , PopoverComponent
  ],
  imports: [ CommonModule, FormsModule, IonicModule],
  entryComponents :[PopoverComponent],
  exports:[CardComponent]
})

export class CardModule { }
