import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  supports = [
    {imgUrl: 'assets/images/sponsors/kubeops-skill.webp', imgAlt: 'kubeops-skill-logo'},
    {imgUrl: 'assets/images/sponsors/angular-thailand-logo.webp', imgAlt: 'angular-thailand-logo'},
    {imgUrl: 'assets/images/sponsors/datarockie-logo.webp', imgAlt: 'datarockie-logo'},
    {imgUrl: 'assets/images/sponsors/bigdata-rpg-logo.webp', imgAlt: 'bigdata-rpg-logo'},
    {imgUrl: 'assets/images/sponsors/peacegen-logo.webp', imgAlt: 'peacegen-logo'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
