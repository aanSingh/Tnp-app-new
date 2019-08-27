import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-posts',
  templateUrl: './company-posts.component.html',
  styleUrls: ['./company-posts.component.css']
})
export class CompanyPostsComponent implements OnInit {
  @Input() companyDetails;
  @Input() showPost: {data: false};
  constructor() { }

  ngOnInit() {
    console.log(this.showPost)
  }

}