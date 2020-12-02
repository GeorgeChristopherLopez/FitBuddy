import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'add-modal',
    loadChildren: () => import('./add-modal/add-modal.module').then( m => m.AddModalPageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./pages/page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'workout/:id',
    loadChildren: () => import('./pages/workout/workout.module').then( m => m.WorkoutPageModule)
  },
  {
    path: 'workout-details/:id',
    loadChildren: () => import('./pages/workout-details/workout-details.module').then( m => m.WorkoutDetailsPageModule)
  },
  {
    path: 'add-exerice',
    loadChildren: () => import('./add-exerice/add-exerice.module').then( m => m.AddExericePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
