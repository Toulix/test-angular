import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from '../../service/data.service';

@Component({
  selector: 'teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.scss'],
})
export class TeamdetailsComponent implements OnInit {
  currentRoute!: string;

  userDetails$: Observable<User | undefined>;

  constructor(
    public activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.currentRoute = this.activatedRoute?.snapshot?.url[0]?.path;
    this.userDetails$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const idString = params.get('id');
        let id = parseInt(idString as string);

        return this.userService.getUserById(id);
      })
    );
  }
}
