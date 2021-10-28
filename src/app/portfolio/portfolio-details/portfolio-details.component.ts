import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

    projects : any
    slug?: string

    constructor(
        private _portfolioService : PortfolioService
    ) { }

    ngOnInit(): void {
        this._fetchBlogPosts()
    }

    private _fetchBlogPosts(){
        this._portfolioService.fetchSingleProject(this.slug).subscribe(
            res => this._handleSuccess(res),
            err => this._handleError(err),
        )
    }

    private _handleSuccess(res: any){
        console.log(res)
        this.projects = res.data.posts
    }

    private _handleError(err: any){
        console.log(err)
    }

}
