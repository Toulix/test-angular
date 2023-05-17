import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentRoute!: string;

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentRoute = this.activatedRoute?.snapshot?.url[0]?.path;
  }
}
