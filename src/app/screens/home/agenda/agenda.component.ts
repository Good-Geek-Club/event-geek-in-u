import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agendaMorning = [
    { time: '8:30 - 9:00', title: 'ลงทะเบียน'},
    { time: '9:00 - 9:15', title: 'ชี้แจงกิจกรรมภายในงาน' },
    { time: '9:15 - 10:00', title: 'การเรียนในมหาวิทยาลัยมีความสำคัญอย่างไร', speaker: 'พี่เน, Good Geek Club'},
    {time: '10:00 - 11:00', title: 'หลักสูตรและการติดสินใจเลือกสาขาวิชาด้านทคโนโลยีในปัจจุบัน', speaker: 'อ.อิสระ, มหาวิทยาลัยศรีปทุม'},
    {time: '11:00 - 12:00', title: 'การใช้ชีวิตในมหาวิทยาลัย', speaker: 'พี่โค้ชเบ๊นซ์'},
  ];
  agendaNoon = [
    {
      time: '13:00 - 14:00',
      contents: [
        {no: '1', title: 'Web Application', speaker: 'พี่เจม, Angular Thailand'},
        {no: '2', title: 'Docker Workshop 101 ', speaker: 'พี่โอม, KubeOps'},
      ],
      duration: '60 min',
    },
    {
      time: '14:00 - 15:00',
      contents: [
        {no: '2', title: 'Docker Workshop 101 ', speaker: 'พี่โอม, KubeOps'},
        {no: '1', title: 'Web Application', speaker: 'พี่เจม, Angular Thailand'},
      ],
      duration: '60 min',
    },
    {
      time: '15:00 - 15:15',
      contents: [
        {no: '', title: 'Break', speaker: ''},
      ],
      duration: '60 min',
    },
    {
      time: '15:15 - 16:15',
      contents: [
        {no: '3', title: 'BigData in daily life and future', speaker: 'พี่บอยด์, BigData RPG'},
        {no: '4', title: 'Cloud Computing Workshop 101', speaker: 'พี่ทอย DataRockie'},
      ],
      duration: '60 min',
    },
    {
      time: '16:15 - 17:15',
      contents: [
        {no: '4', title: 'Cloud Computing Workshop 101', speaker: 'พี่ทอย DataRockie'},
        {no: '3', title: 'BigData in daily life and future', speaker: 'พี่บอยด์, BigData RPG'},
      ],
      duration: '60 min',
    }
   ];
  constructor() { }

  ngOnInit(): void {
  }

  getSpan(contents: any[]) {
    return contents.length === 1 ? 2 : 1;
  }

}
