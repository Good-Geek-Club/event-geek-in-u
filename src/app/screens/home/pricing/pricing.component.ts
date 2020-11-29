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
      target: null,
      href: null
    },
    {
      title: 'Quota',
      price: '190&#x0E3F;',
      detail: [
        'ทำภารกิจพิเศษ',
        'กับแบบทดสอบที่ท้าทาย',
      ],
      btnTitle: 'MORE',
      disabled: false,
      target: '#quota-info',
      href: null,
    },
    {
      title: 'Sharer',
      price: '390&#x0E3F;',
      detail: [
        'ทำภารกิจพิเศษ',
        'ประชาสัมพันธ์ไปยังเพื่อนๆ'
      ],
      btnTitle: 'MORE',
      disabled: false,
      target: '#sharer-info',
      href: null,
    },
    {
      title: 'General',
      price: '690&#x0E3F;',
      detail: [
        'เข้าร่วมกิจกรรมแบบไร้เงื่อนไข',
      ],
      btnTitle: 'GET TICKET',
      disabled: false,
      target: null,
      href: 'https://www.eventpop.me/e/10337/geekinu-2020/'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
