import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  supports = [
    {imgUrl: 'assets/images/sponsors/kubeops-skill.png', imgAlt: 'kubeops-skill-logo'},
    {imgUrl: 'assets/images/sponsors/angular-thailand-logo.png', imgAlt: 'angular-thailand-logo'},
    {imgUrl: 'assets/images/sponsors/datarockie-logo.png', imgAlt: 'datarockie-logo'},
    {imgUrl: 'assets/images/sponsors/bigdata-rpg-logo.png', imgAlt: 'bigdata-rpg-logo'},
    {imgUrl: 'assets/images/sponsors/peacegen-logo.png', imgAlt: 'peacegen-logo'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
