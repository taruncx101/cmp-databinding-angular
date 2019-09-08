import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{name: string, content: string}>();

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log( nameInput );
    this.serverCreated.emit({
      name: nameInput.value ,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    this.bluePrintCreated.emit({
      name: nameInput.value ,
      content: this.serverContentInput.nativeElement.value
    });
  }

}
