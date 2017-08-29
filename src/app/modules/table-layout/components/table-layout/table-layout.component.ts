import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent implements OnInit {

  scrollContainer:any;
  @Input('data') data:any;
  @Input('rowHeight') rowHeight:any;

  constructor() {
    
  }

  ngOnInit() {
      this.scrollContainer = document.getElementById("scrollable");
      if(this.scrollContainer) window.addEventListener('scroll', (e) => this.scroll(e), true);
  }

  ngOnDestroy() {
      this.scrollContainer.removeEventListener('scroll', (e) => this.scroll(e), true);
  }

  scroll = (e): void => {
      if(e.target.id === "scrollable"){
        let point = document.getElementById("point");
        let point_y = document.getElementById("data_rows");
        if(!point) return;
 
        var innerOffset = this.getOffset(point);
        var innderOffsetY = this.getOffset(point_y);
        var outerOffset = this.getOffset(this.scrollContainer);

        let fixed = document.getElementById("top_left_fixed");
        let scrollable_x = document.getElementById("scrollable_x");
        let scrollable_y = document.getElementsByClassName("scrollable_y");

        var deltaX = this.getDeltaX(innerOffset, outerOffset);
        var deltaY = this.getDeltaY(innderOffsetY, outerOffset);

        if(fixed){
          fixed.style.left = deltaX + 'px';
          fixed.style.top = (deltaY + 60) + 'px';
        }

        if(scrollable_y){
          for(var i = 0; i < scrollable_y.length; i++){
            (scrollable_y.item(i) as HTMLElement).style.left = deltaX + 'px';
          }
        }
        
        if(scrollable_x){
          scrollable_x.style.top = deltaY + 'px';
        } 

      }
  }

  getDeltaX(innerOffset, outerOffset){
    if(innerOffset.left > 0) return outerOffset.left - innerOffset.left;
    else return outerOffset.left + (0 - innerOffset.left);
  }

  getDeltaY(innerOffset, outerOffset){
    if(innerOffset.left > 0) return outerOffset.top - innerOffset.top;
    else return outerOffset.top + (0 - innerOffset.top);
  }

  getOffset(elem) {
    var offset = elem.getBoundingClientRect();
    var docElem = document.documentElement;

    return {
      top: offset.top + window.pageYOffset - docElem.clientTop,
      left: offset.left + window.pageXOffset - docElem.clientLeft
    };
  }

  fixColumn(colName:string){
    var index = this.data.scrollableColumnNames.indexOf(colName);
    if(index >= 0)this.data.scrollableColumnNames.splice(index, 1);
    if(this.data.fixedColumnNames.indexOf(colName) < 0)this.data.fixedColumnNames.push(colName);
  }

  unfixColumn(colName:string){
    var index = this.data.fixedColumnNames.indexOf(colName);
    if(index >= 0)this.data.fixedColumnNames.splice(index, 1);
    if(this.data.scrollableColumnNames.indexOf(colName) < 0) this.data.scrollableColumnNames.splice(0, 0, colName);
  }


}

