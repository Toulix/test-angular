import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  currentRoute!: string;

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentRoute = this.activatedRoute?.snapshot?.url[0]?.path;
  }
}
