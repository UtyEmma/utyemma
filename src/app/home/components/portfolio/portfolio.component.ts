import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    portfolio: any

    constructor(
        private _portfolioService: PortfolioService
    ) { }

    ngOnInit(): void {
        this._fetchPortfolio()
    }

    private _fetchPortfolio(){
        this._portfolioService.fetchProjects(4).subscribe(
            res => this._handleResponse(res),
            err => this._handleError(err)
        )
    }

    private _handleResponse(res: any){
        console.log(res)
        this.portfolio = res.data.portfolio
    }

    private _handleError(err: any){
        console.log(err)
    }
}
