import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FitlogService } from '../services/fitlog.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.page.html',
  styleUrls: ['./add-modal.page.scss'],
})
export class AddModalPage implements OnInit {
 
  errorMsg = "Invalid Entry";
  constructor(private modalCtrl: ModalController, private fitlogService: FitlogService, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  // make a submit for adding ex form
  submit() {  
    let name = (<HTMLInputElement>document.getElementById('name')).value;
 
  
    //  validation

  //  let valid = this.validate(name, sets, reps, weight);
   
    if(true){
      this.fitlogService.workouts.push({
        title: name,
       exercises: [],
      })
      this.modalCtrl.dismiss();
    }

     
  }  

  validate(name, sets, reps, weights){
    let res = true;
    // check name
    if(/^[a-zA-Z ]+$/.test(name) == false|| name.length > 10)
    {
      this.errorMsg = "Name must contain only letters. Length limit 10";
      this.showToast();
      res = false;
    }
    // check sets
   else if(/^[0-9]+$/.test(sets)==false)
    {
      
        this.errorMsg = "Sets be a number";
        this.showToast();
        res = false;
    }
  
    // check reps
   else if(/^[0-9]+$/.test(reps)===false)
    {
      
      this.errorMsg = "Reps must be a number";
      this.showToast();
      res = false;
   }

  
    // check weights
  else  if(/^[0-9]+$/.test(weights)==false)
    {
      
      this.errorMsg = "Weights must be a number. Bodyweight only is 0";
      this.showToast();
      res = false;
    }

  
    console.log(name.length, sets.length, reps.length, weights.length)
    return res;
  }


  cancel(){
    this.modalCtrl.dismiss();
  }

  async showToast(){
    const toast = await this.toastCtrl.create({
      message: this.errorMsg,
      duration: 2000
    });
    toast.present();
  }


}
