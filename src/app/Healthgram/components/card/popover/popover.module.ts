import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PopoverComponent],
  imports: [ CommonModule, FormsModule, IonicModule],
  exports:[PopoverComponent]
})
export class PopoverModule { }
