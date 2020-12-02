import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExericePage } from './add-exerice.page';

const routes: Routes = [
  {
    path: '',
    component: AddExericePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddExericePageRoutingModule {}
