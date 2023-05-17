import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute!: string;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('activated route',  this.activatedRoute?.snapshot?.url[0]?.path);
    
   this.currentRoute = this.activatedRoute?.snapshot?.url[0]?.path;
  }

}
