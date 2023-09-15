import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD de lembretes';
  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent 


  constructor () { 
  
  }
  
  ngOnInit() {
    
    this.errorMsgComponent.setError("ERRO")
  
 }
}
