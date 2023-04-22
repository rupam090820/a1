import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a1';
  public sms:any='';  //now sms=n.value (2)
  public mail:any=''; // this is for child2 component
 
  public phone:string='abv';
  send(n:any, n1:any){
    console.log("button clicked!!");
    console.log(n.value)
    this.sms=n.value; //its mean we store the value from  input field to sms variable  (1)
    this.mail=n1.value;  // this is for child2 component
    
  }
  
}
