import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  prices = [
    {
      title: 'Early Bird',
      price: 'Free',
      detail: [
        'สำหรับผู้สมัคร 5 ท่านแรก'
      ],
      btnTitle: 'SOLD OUT',
      disabled: true,
      isQuota: false,
      href: null
    },
    {
      title: 'Quota',
      price: '190&#x0E3F;',
      detail: [
        'ทำภารกิจพิเศษ',
        'ผ่านการคัดเลือก'
      ],
      btnTitle: 'MORE',
      disabled: false,
      isQuota: true,
      href: null
    },
    {
      title: 'General',
      price: '590&#x0E3F;',
      detail: [
        'เข้าร่วมกิจกรรมแบบไร้เงื่อนไข',
      ],
      btnTitle: 'GET TICKET',
      disabled: false,
      isQuota: true,
      href: 'https://www.eventpop.me/e/10337/geekinu-2020/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
