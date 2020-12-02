import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExericePageRoutingModule } from './add-exerice-routing.module';

import { AddExericePage } from './add-exerice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExericePageRoutingModule
  ],
  declarations: [AddExericePage]
})
export class AddExericePageModule {}
