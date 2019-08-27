import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() companies;
  @Output() showPosts = new EventEmitter<{ companyId: Number, showPosts: boolean }>();

  constructor() { }

  getPosts(companyId: Number) {
    // this.showCompanyPost = true;
    // this.companyId = companyId;
    //console.log(this.showCompanyPost)
    var showPosts = true;
    this.showPosts.emit({ companyId: companyId, showPosts: showPosts });
  }
  ngOnInit() {
  }

}