import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [ CommonModule, FormsModule, IonicModule],
  exports:[CardComponent]
})

export class CardModule { }
