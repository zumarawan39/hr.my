import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginVar!: FormGroup;
  constructor(private fb: FormBuilder, private api: AuthserviceService, private route: Router) {
    this.loginVar = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  login() {
    let data = this.loginVar.value;
    this.api.login(data).subscribe((res) => {
      console.log("back end response", res);
      if(res.message=="Login successful"){
        this.route.navigate(["dashboard"]);
      }else{
   console.log("data login:=>",data);
      }
  })
}
}
