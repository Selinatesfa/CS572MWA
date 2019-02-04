import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { observable, Observable } from 'rxjs';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  signupuserdata = {};
  logindata = {}
  myForm: FormGroup;
  mylgin: FormGroup;

  constructor(private formBuilder: FormBuilder, private userservice: UserinfoService) { }




  onlogin() {
    console.log(this.mylgin.value)
    this.userservice.login(this.logindata)
      .subscribe(res => console.log(res),
        err => console.log(err))
  }
  onSubmit() {
    // console.log("ddddd" + this.signupuserdata)


    this.userservice.signupuser(this.myForm.value)
      .subscribe(res => {
        return console.log(res);
      },
        err => {
          return console.log(err);
        })
    //console.log(this.myForm)

  }

  myvalidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promise;
  }

  ngOnInit() {

    this.mylgin = this.formBuilder.group({
      'lname': ['username', [Validators.required]],
      'lpass': ['password', [Validators.required]]
    });

    this.myForm = this.formBuilder.group({
      'username': ['selina', [Validators.required]],
      'lusername': ['abraham', [Validators.required]],
      'email': ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'password': ['', Validators.required],
      'cpassword': ['', Validators.required],
    });
    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );


    this.mylgin.valueChanges.subscribe((data: any) => console.log({ data }))
  }

}
