import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    projects : any

    constructor(
        private _portfolioService : PortfolioService
    ) { }

    ngOnInit(): void {
        this._fetchBlogPosts()
    }

    private _fetchBlogPosts(){
        this._portfolioService.fetchProjects().subscribe(
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
