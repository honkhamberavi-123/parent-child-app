import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 studentName:string ='Ravi'

 receivedMessage: string =''; 
 
 
 
  constructor() { }

  ngOnInit(): void {}
    receiveMessage(message: string): void{
    this.receivedMessage = message;
    }
  }


