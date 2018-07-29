import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() posttitle : String;
  @Input() postcontent : String;
  @Input() postloveIts : number;
  @Input() postcreated_at : Date;

  loveIt() {
    this.postloveIts=this.postloveIts+1;
  }

  dontloveIt() {
    this.postloveIts=this.postloveIts-1;
  }

  constructor() { }

  ngOnInit() {
  }

}
