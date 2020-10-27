import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(public httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:8000/primera/').subscribe((res) =>{
      console.log(res); 
    });
  }
}

