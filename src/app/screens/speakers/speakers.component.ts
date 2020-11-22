import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {
      imgUrl: 'assets/images/speakers/nay-araiva.jpg',
      name: 'พี่เน, Good Geek',
      position: 'Founder @GoodGeek Club และ Cloud Development Lead @D-Net Technology',
      exp: [
        'DevOps & System Analysis @D-Net Technology',
        'Developer @Moahom',
        'จบจากวิศกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์',
      ],
      topic: 'การเรียนในมหาวิทยาลัยมีส่วนสำคัญอย่างไรต่อการใช้ชีวิตในอนาคต',
      synopsis: '' +
        '- ในยุคปัจจุบัน การเรียนมหาวิทยาลัยยังจำเป็นอยู่หรือไม่ อย่างไร ?' +
        '- การเลือกมหาวิทยาลัยมีผลต่ออนาคตการทำงานหรือไม่อย่างไร ?'
    },
    {
      imgUrl: 'assets/images/speakers/isara-spu.jpg',
      name: 'อาจารย์อิศรา นาคะวิสุทธิ์',
      position: 'หัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยศรีปทุม',
      exp: [
        'ผู้จัดการความปลอดภัยและระบบงานเทคโนโลยี @SCB',
      ],
      topic: 'หลักสูตรและการตัดสินใจเลือกสาขาวิชาทางด้านเทคโนโลยีในปัจจุบัน',
      synopsis: ''
    },
    {
      imgUrl: 'assets/images/speakers/benz-siit.jpg',
      name: 'พี่โค้ชเบ๊นซ์, ภัทรพงษ์ พลเสน',
      position: 'นักวิเคราะห์ งานแผนกลยุทธ์การตลาด ฝ่ายธุรกิจนวัตกรรมและถ่ายทอดเทคโนโลยี ศูนย์นาโนเทคโนโลยีแห่งชาติ',
      exp: [
        'วิทยากรและโค้ชที่ปรึกษาเพื่อคนรุ่นใหม่ สมาคมคนรุ่นใหม่เพื่อสันติภาพ'
      ],
      topic: 'การใช้ชีวิตในมหาวิทยาลัย',
      synopsis: 'เราควรจะอะไรบ้างในระหว่างเรียนมหาวิทยาลัย ?'
    },
    {
      imgUrl: 'assets/images/speakers/ohm-kubeops.jpg',
      name: 'พี่โอม, KubeOps',
      position: 'Co - Founder @KubeOps Skills',
      exp: [
        'CNCF Certified Kubernetes Application Developer (CKAD)',
        'CNCF Certified Kubernetes Administrator (CKA)',
      ],
      topic: 'Workshop : Docker Workshop 101',
      synopsis: ''
    },
    {
      imgUrl: 'assets/images/speakers/toy-datarockie.jpg',
      name: 'พี่ทอย DataRockie',
      position: 'Admin Page Datarockie',
      topic: 'Data Analytic on Cloud (in your browser)',
      synopsis: ''
    },
    {
      imgUrl: 'assets/images/speakers/jame-angular.jpg',
      name: 'พี่เจมส์, Angular Thailand',
      position: 'Web Consultant @ITOPPLUS และ Admin Angular Thailand',
      exp: [
        'จบจากคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ หลักสูตรนานาชาติ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เกียรตินิยมอันดับ 1',
        'Angular Engineer @7Peeks Software'
      ],
      topic: 'Angular Web Application Workshop',
      synopsis: 'ประวัติศาสตร์ของเว็บเทคโนโลยี และทดลองทำ Web Application ง่ายๆ เป็น App Todo List ด้วย Angular, บน Firebase'
    },
    {
      imgUrl: 'assets/images/speakers/boyd-bigdata.jpg',
      name: 'พี่บอยด์, BigData RPG',
      position: 'Data Scientist @SCB',
      exp: [
        'Data Scientist @3DS Interactive',
        'Master\'s degreeField Of StudyMaster of Engineering Program in Big Data Engineering @Dhurakij Pundit University'
      ],
      topic: 'Workshop : เล่าเรื่อง BigData in daily life and future',
      synopsis: ''
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
