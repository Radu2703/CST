import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit,OnChanges {
  @Input()pre: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log(this.pre);
  }

}
