import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SiteComponent } from './site/site.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    SiteComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzModalModule,
    NzButtonModule,
    NzCardModule
  ]
})
export class DashboardModule { }
