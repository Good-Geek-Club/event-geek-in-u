import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contacts = [
    { name: 'พี่แมน', tel: '082-345-2819' },
    { name: 'พี่ปอ', tel: '090-548-2666' },
  ];
  socials = [
    {
      name: 'Facebook',
      title: 'good.geek.community',
      href: 'https://www.facebook.com/good.geek.community/',
      iconClass: 'fab fa-facebook-square mr-2',
    },
    {
      name: 'Instagram',
      title: 'goodgeek.club',
      href: 'https://www.instagram.com/goodgeek.club',
      iconClass: 'fab fa-instagram mr-2',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
