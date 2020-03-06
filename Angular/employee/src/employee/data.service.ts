import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getQuallification(){

    return of(["Bechlors","PHD","Masters"],);
  }
  getExperience(){

    return of(["Fresher","Development","Designing","Data-analyst"]);
  }
  getlanguages(){
    return of(["C","Angular","Ruby","Python","java"]);
  }
}
