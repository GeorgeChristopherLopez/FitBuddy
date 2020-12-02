import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { AddModalPage } from '../add-modal/add-modal.page';

import { FitlogService } from '../services/fitlog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  workouts = []
  constructor(private modalCtrl: ModalController, private fitlogService: FitlogService, private router: Router) {
    this.workouts = fitlogService.workouts;
  }
  goTo(title){
    console.log("going to...", title)
    this.router.navigate(['/workout-details', title]);
  }
    async showModal() {  
      const modal = await this.modalCtrl.create({  
        component: AddModalPage  
      });  
      return await modal.present();   
    }  
  
}
