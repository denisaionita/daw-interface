import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  signin: boolean;
  signup: boolean;

  name: String;
  password: String;
  email: String;

  selectedCategory: String;

  categories: Array<String> = ['Science Fiction', 'Thriller', 'Romance', 'Poetry'];
  
  
  constructor(private apiService: ApiService) { 
    this.signin = false;
    this.signup = false;
  }

  ngOnInit() {

  }

  registerUser(user) {
    this.apiService.registerUser(user).subscribe(data => console.log(data));
  }

  signIn() {
    this.signin = true;
    this.signup = false;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
  }

  signUp() {
    this.signin = false;
    this.signup = true;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
  }

  reset() {
    this.signin = false;
    this.signup = false;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
    this.selectedCategory = undefined;
  }

  submitSignIn() {
    console.log(`email:${this.email} password:${this.password} `);
  }

  isInvalidSignIn() {
    if (this.email === undefined || this.password === undefined) {
      return true;
    }
    return false;
  }

  submitSignUp() {
    console.log(`name: ${this.name} email:${this.email} password:${this.password} `);
    this.registerUser({'username': this.email, 'firstName': this.name, 'password': this.password});
  }

  isInvalidSignUp() {
    if (this.name === undefined || this.email === undefined || this.password === undefined) {
      return true;
    }
    return false;
  }

  selectCategory(item) {
    this.selectedCategory = item;
  }


}
