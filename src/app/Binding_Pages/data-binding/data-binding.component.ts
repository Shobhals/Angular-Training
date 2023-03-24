import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  // 1.Interpolation
  title1 = "Interpolation";
  name = "Simple Data Binding Through Interpolation";

  //2. Property Binding
  title2 = "Property Binding";
  secretTextHidden = false;
  user: any;
  enableText() {
    if (this.secretTextHidden) {
      this.secretTextHidden = false;
    } else {
      this.secretTextHidden = true;
    }
  }

  //3. Class Binding
  title3 = "Class Binding"

  applyclass:boolean = false;

  // 4. Style Binding
  title4 ="Style Binding"

  myStyle1 ="15px";

  isActive:boolean= true;


  //4. Style Binding
  // title3 = "Style Binding"
  // color = "red";
  // bgColor = "green";
 

  // updateColor() {
  //   this.color = "blue";
  //   this.bgColor = "red"
  // }


  //  5. Event Binding
  title5 = "Event Binding"
  getData(val: string) {
    console.warn("val")
  }

  // 6.Click Event 
  title6 = "Click Event In Angular";

  myEvent(evt: string) {
    console.warn(evt)
  }

  // CollapseModule
  isCollapsed = false;

  // NgIf else & then Directive
  
  //  ngIf 1st step
  isValid: boolean = false;

  //  2nd step
  onCreateAccount() {
    this.isValid = true;
  }

  // ngSwitch
  // getProductVal(val: any) {
  //   console.log(val)
  // }

  // ngFor
  products = [
    { proimg: '', name: 'Laptop', id: 'pro01', price: 15000 },
    { proimg: '', name: 'Mobile', id: 'pro02', price: 8000 },
    { proimg: '', name: 'TV', id: 'pro03', price: 12000 },
    { proimg: '', name: 'Washing Machine', id: 'pro04', price: 30000 }
  ]

  // push and splice using ngFor

  users: any[] = [];
  // users = [];

  onCreateUser(uname: { value: any; }) {
    this.users.push({
      name:uname.value
    });
  }

  // onRemoveUser(i: any): void{
  //   this.users.splice(this.users.length -1)
  // }

  //splice in angular -- used to remove item one by one
  onRemoveItem(i: number){
    this.users.splice(i , 1)
  }
}

