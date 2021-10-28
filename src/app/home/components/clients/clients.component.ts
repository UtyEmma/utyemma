import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    testimonials: any

    constructor(
        private _testimonialService: TestimonialsService
    ) { }

    ngOnInit(): void {
        this.fetchTestimonials()
    }

    fetchTestimonials(){
        this._testimonialService.fetchTestimonials().subscribe(
            res => this._handleSuccess(res),
            err => this._handleError(err)
        )
    }

    private _handleSuccess (res: any){
        this.testimonials = res
        console.log(res)
    }

    private _handleError(err: any){
        console.log(err)
    }
}
