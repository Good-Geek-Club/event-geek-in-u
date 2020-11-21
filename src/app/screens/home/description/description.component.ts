import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  objectives = [
    'เพื่อให้ผู้เข้าอบรมมีแนวทางในการเลือกและตัดสินใจเข้าศึกษาต่อในสาขาด้านเทคโนโลยีที่คนเองสนใจ',
    'เพื่อให้ผู้เข้าอบรมมีแรงบันดาลใจและมุ่งมั่นในการเข้าศึกษาต่อในสาขาวิชาด้านเทคโนโลยี',
    'เพื่อให้ผู้เข้าอบรม ได้เรียนรู้ ทำความเข้าใจเทคโนโลยีที่ตนสนใจเบื้องต้น และได้ลงมือปฎิบัติจริงจาก Workshop'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
