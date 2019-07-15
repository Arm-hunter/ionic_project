import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  accounts = [];
  val_cal ='';
  constructor(private http:HttpClient) {

  }
  


   calculettor(val_1,val_2) {
    let val_cal = val_1 + val_2 ;
    console.log('ตัวตั้ง ',val_1,'ตัวบวก ',val_2,'ผลลัพ ',val_cal);
    
      let url = 'https://github.com/Arm-hunter/ionic_project.git';
  }


}
