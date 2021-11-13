import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    date: number
  constructor() {
      const date = new Date()
      this.date = date.getFullYear()
   }

  ngOnInit(): void {
  }

}
