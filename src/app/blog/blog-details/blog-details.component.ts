import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

    posts : any
    slug? : string

    constructor(
        private _blogService : BlogService
    ) { }

    ngOnInit(): void {
        this._fetchBlogPosts()
    }

    private _fetchBlogPosts(){
        this._blogService.fetchSinglePost(this.slug).subscribe(
            res => this._handleSuccess(res),
            err => this._handleError(err),
        )
    }

    private _handleSuccess(res: any){
        console.log(res)
        this.posts = res.data.posts
    }

    private _handleError(err: any){
        console.log(err)
    }
}
