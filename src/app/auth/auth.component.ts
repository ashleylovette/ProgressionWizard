import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 isLoggedIn = false;
 isLoginMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitAuth(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
