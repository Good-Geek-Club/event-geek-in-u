import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {
      imgUrl: 'https://media.amazonwebservices.com/blog/2017/jeffbarr_purple_2017_400x400.jpg',
      name: 'เจษฎา อิ่มจิตร',
      position: 'แกนนำคณะราษฎร',
      topic: 'การส่งหนังสือร่างแก้รัฐธรรมนูญฉบับคณะราษฎร',
      synopsis: 'Let\'s learn and retrospect on how Amazon.com started their development transformation. We\'ll explore together the evolution of modern application design, from monoliths to microservices, service orchestration, distributed tracing and CI/CD for multiple software delivery pipelines. After this session, you\'ll understand how microservices can provide higher system reliability, fine-grained scalability, and faster development cycles — and how DevOps and serverless are the key components.'
    },
    {
      imgUrl: 'https://media.amazonwebservices.com/blog/2017/jeffbarr_purple_2017_400x400.jpg',
      name: 'Pavin Chachavalpongpun',
      position: 'ผู้เคลื่อนไหวทางการเมือง',
      topic: 'การส่งหนังสือร่างแก้รัฐธรรมนูญฉบับคณะราษฎร',
      synopsis: 'สวัสดีค่ะ ปวินค่ะ'
    },
    {
      imgUrl: 'https://media.amazonwebservices.com/blog/2017/jeffbarr_purple_2017_400x400.jpg',
      name: 'Somsak Jeamteerasakul',
      position: 'ผู้เคลื่อนไหวทางการเมือง',
      topic: 'การส่งหนังสือร่างแก้รัฐธรรมนูญฉบับคณะราษฎร',
      synopsis: 'In this talk, we show you how to satisfy your compliance department using AWS Config rules. We walk you through enabling Config in a multi-account environment, mapping your compliance requirements to AWS-managed Config rules to demonstrate continuous compliance, and building and deploying your own AWS Config rules. Learn the basics of AWS Config, Config rules, and the central aggregation of AWS Config information in a single pane of glass.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
