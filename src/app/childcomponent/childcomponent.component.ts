import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
})
export class ChildcomponentComponent implements OnInit {
  @Input() inputText: string = '';
  @Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('childMessage') cMessage: ElementRef;

  constructor() {}

  ngOnInit() {}

  sendMessage(str: string): void {
    this.outputEvent.emit(str);
  }

  clear(): void {
    this.cMessage.nativeElement.value = '';
  }
}
