import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
})
export class ChildcomponentComponent implements OnInit {
  @Input() inputText: string = '';
  @Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

  cText: string = '';

  constructor() {}

  ngOnInit() {}

  sendMessage(): void {
    this.outputEvent.emit(this.cText);
  }

  clear(): void {
    this.cText = '';
  }
}
