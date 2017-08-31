import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { TreeViewComponent } from '../tree-view/tree-view.component';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css']
})
export class TableLayoutComponent implements OnInit {

  scrollContainer:any;
  @Input('data') data:any;
  @Input('rowHeight') rowHeight:any = '60px';
  @Input('background') background:any = '#444';
  @Input('color') color:any;
  negRowHeight:any;
  subOneRowHeight:any;
  topLeftBg:any;
  xyBg:any;

  constructor() {
    
  }

  ngOnInit() {
      this.scrollContainer = document.getElementById("scrollable");
      if(this.scrollContainer) window.addEventListener('scroll', (e) => this.scroll(e), true);
      this.negRowHeight = "-" + this.rowHeight;
      this.subOneRowHeight = (parseInt(this.rowHeight) - 1) + "px";
      this.topLeftBg = this.colorLuminance(this.background, 0.4);
      this.xyBg = this.colorLuminance(this.background, 0.2);     
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
          fixed.style.top = (deltaY + parseInt(this.rowHeight) + 'px');
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

  colorLuminance(hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }
    return rgb;
  }


}

