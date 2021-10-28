import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    posts : any

    constructor(
        private _blogService : BlogService
    ) { }

    ngOnInit(): void {
        this._fetchBlogPosts()
    }

    private _fetchBlogPosts(){
        this._blogService.fetchBlogPosts(3).subscribe(
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
