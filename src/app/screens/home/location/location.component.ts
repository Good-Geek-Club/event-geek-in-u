import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  pictures = [
    {imgUrl: 'assets/images/KM.png'},
    {imgUrl: 'assets/images/KM2.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
