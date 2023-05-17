import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: Router) {}

  login(userCredentials: { username: string; password: string }) {
    // send http request to verify credentials... (should return back a token)
    const { username } = userCredentials;
    // http resquest...

    // test@gmail.com is a dummy email address since we don't have an api for now
    const userData = {
      username,
      email: 'test@gmail.com',
      token: 'loremipsumsitdoloramset',
    };
    localStorage.setItem('user', JSON.stringify(userData));
  }

  //Get user information from local storage
  getUserInfoFromLocalStorage() {
    const userData = localStorage.getItem('user');
    return JSON.parse(userData as string);
  }
}
