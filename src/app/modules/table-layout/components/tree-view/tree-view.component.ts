import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input('row') row:any;
  @Input('fixedColls') fixedColumnNames:any;
  @Input('scrollColls') scrollableColumnNames:any;
  @Input('rowHeight') rowHeight:any;
  @Input('background') background:any;
  @Input('brighterBG') topLeftBg:any;
  @Input('mediumBG') xyBg:any;
  @Input('color') color:any;
  negRowHeight:any;
  subOneRowHeight:any;

  constructor() { 
    
  }

  ngOnInit() {
    this.subOneRowHeight = (parseInt(this.rowHeight) - 1) + "px";
    this.negRowHeight = "-" + this.rowHeight;
  }

}
