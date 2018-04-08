import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() screenSelected = new EventEmitter<string>();

  onSelect(screen: string){
    this.screenSelected.emit(screen);
  }

  constructor() { }

  ngOnInit() {
  }

}
