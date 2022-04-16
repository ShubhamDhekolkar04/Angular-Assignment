import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() message:EventEmitter<string>=new EventEmitter<string>()
 
    pass(){
      this.message.emit("Thi data is come from child")
    }
  constructor() { }

  ngOnInit(): void {
  }

}
