import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CompanyPostsComponent } from './components/company-posts/company-posts.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SideNavComponent, CompanyPostsComponent, CompanyInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
