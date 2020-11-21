import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda: {title: string, time: string, detail?: string}[] = [
    {title: 'ลงทะเบียน', time: '8:30'},
    {title: 'การเรียนในมหาวิทยาลัยมีความสำคัญอย่างไร', time: '9:10'},
    {title: 'หลักสูตรและการติดสินใจเลือกสาขาวิชาด้านทคโนโลยีในปัจจุบัน', time: '10:00'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
