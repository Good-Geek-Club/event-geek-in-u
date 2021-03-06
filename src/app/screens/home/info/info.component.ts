import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info = [
    {
      imgUrl: 'assets/images/info/geekinu-info-level.png',
      title: 'ระดับการศึกษา',
      description: 'นักเรียนชั้นมัธยมปลาย หรือนักเรียนปวช. ที่มีความสนใจเทคโนโลยีสารสนเทศและอยากจะเข้าศึกษาต่อในสายงานด้านเทคโนโลยีสารสนเทศ',
    },
    {
      imgUrl: 'assets/images/info/geekinu-info-cert.png',
      title: 'มีประกาศนียบัตรให้หรือไม่?',
      description: 'มีประกาศนียบัตรให้กับผู้เข้าร่วมกิจกรรม'
    },
    {
      imgUrl: 'assets/images/info/geekinu-info-price.png',
      title: 'ค่าใช้จ่ายในการเข้าร่วมกิจกรรม?',
      description: 'มีค่าลงทะเบียน 690 บาท'
    },
    {
      imgUrl: 'assets/images/info/geekinu-info-person.png',
      title: 'จำนวนที่รับ',
      description: 'ออฟไลน์ จำนวน 50-70 คน'
    },
    {
      imgUrl: 'assets/images/info/geekinu-info-privilege.png',
      title: 'สิทธิพิเศษ',
      description: 'ฟรีสำหรับ 5 ท่านแรก'
    },
    {
      imgUrl: 'assets/images/info/geekinu-info-swag.png',
      title: 'ของที่ระลึก',
      description: 'เสื้อกิจกรรมและอื่นๆ'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
