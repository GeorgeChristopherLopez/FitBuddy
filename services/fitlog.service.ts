import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FitlogService {
  workouts = [
{
  title: "workout1",
  exercises: [
      {
        name: "Standard Pushup",
        goal: 50,
        reps: 12,
        sets: 3,
        weight: 0,
      },
      {
        name: "Wide Pushup",
        goal: 50,
        reps: 12,
        sets: 3,
        weight: 0,
      },
      {
        name: "Military Pushup",
        goal: 50,
        reps: 12,
        sets: 3,
        weight: 0,
      }



  ]
  
},
{
  title: "workout2",
 
  exercises: [
      {
        name: "Standard Pullup",
        goal: 20,
        reps: 6,
        sets: 3,
        weight: 0,
      },
      {
        name: "Wide Pullup",
        goal: 20,
        reps: 6,
        sets: 3,
        weight: 0,
      },
      {
        name: "Close Grip Pullup",
        goal: 20,
        reps: 6,
        sets: 3,
        weight: 0,
      }



  ]
}

  ]
  constructor() { }
}
