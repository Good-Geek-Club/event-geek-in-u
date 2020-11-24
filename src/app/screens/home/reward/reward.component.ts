import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {

  rewards = [
    {
      smallImgUrl: 'assets/images/rewards/geekinu-shirt-front-small.png',
      imgUrl: 'https://www.geekinu.com/assets/images/rewards/geekinu-shirt-front.png',
    },
    {
      smallImgUrl: 'assets/images/rewards/geekinu-shirt-back-small.png',
      imgUrl: 'https://www.geekinu.com/assets/images/rewards/geekinu-shirt-back.png'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
