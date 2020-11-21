import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info = [
    {
      imgUrl: 'assets/images/services-icon-1.svg',
      title: 'ระดับการศึกษา',
      description: 'นักเรียนชั้นมัธยมศึกษาปีที่6 หรือนักเรียนปวช.3 ที่มีสนใจเทคโนโลยีสารสนเทศและอยากจะเข้าศึกษาต่อในสายงานด้านเทคโนโลยีสารสนเทศ',
    },
    {
      imgUrl: 'assets/images/services-icon-3.svg',
      title: 'มีประกาศนียบัตรให้หรือไม่?',
      description: 'มีประกาศนียบัตรให้กับผู้เข้าร่วมกิจกรรม'
    },
    {
      imgUrl: 'assets/images/services-icon-3.svg',
      title: 'ค่าใช้จ่ายในการเข้าร่วมกิจกรรม?',
      description: 'มีค่าลงทะเบียน 690 บาท'
    },
    {
      imgUrl: 'assets/images/services-icon-3.svg',
      title: 'จำนวนที่รับ',
      description: 'ออฟไลน์ จำนวน 50-70 คน'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
