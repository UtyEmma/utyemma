import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SharedModule } from '../shared/shared.module';
import { BlogService } from './services/blog.service';


@NgModule({
    declarations: [
        BlogComponent,
        BlogDetailsComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule
    ],
    providers: [
        BlogService
    ]
})
export class BlogModule { }
