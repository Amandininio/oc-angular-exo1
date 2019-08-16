import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-items',
  templateUrl: './post-list-items.component.html',
  styleUrls: ['./post-list-items.component.scss']
})
export class PostListItemsComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() postDateStamp: Date;

  constructor() { }
  ngOnInit() {
  }

  getTitle() {
    return this.postTitle;
  }
  getContent() {
    return this.postContent;
  }
  getDate() {
    return this.postDateStamp;
  }

  onLove() {
    this.postLove ++ ;
  }
  onHate() {
    this.postLove -- ;
  }

  getColor() {
    if (this.postLove < 0) {
      return 'tomato';
    } else if (this.postLove > 0) {
      return 'lightgreen';
    } else {
      return 'white';
    }
  }
  getColorText() {
    if (this.postLove < 0) {
      return 'red';
    } else if (this.postLove > 0) {
      return 'green';
    } else {
      return 'black';
    }
  }

}

