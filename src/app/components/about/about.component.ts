import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/entities/projects';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  frase = "About";  
  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
