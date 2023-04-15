import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
// import {UserInfo} from './user-info';
// import {NgForm} from '@angular/forms';
// import {HttpClient} from "@angular/common/http";
 @Component({
   selector: 'app-registration',
   templateUrl: './registration.component.html',
   styleUrls: ['./registration.component.css']
 })
export class RegistrationComponent {}
//   // View => Model
//   userInfo: UserInfo = {
//     company_name: '',
//     company_address: '',
//     phone: 0,
//     email: '',
//     password: ''
//   };
//
//   constructor(private http: HttpClient
//   ) {
//   }
//   ngOnInit(): void {
//   }
//
//   ngAfterViewInit() {
//   }
//
//   onSubmit(form: NgForm) {
//     const url = 'http://localhost:4000/v1/users';
//     this.http.post(url, this.userInfo).subscribe(
//       res => {
//         console.log(res);
//         alert('Registration successful!');
//       },
//       err => {
//         console.log(err);
//         alert('Registration failed. Please try again later.');
//       }
//     );
//   }
//
//   // companyNameChange(companyname: string) {
//   //   console.log(companyname)
//   // }
//
//   // submitRegistration() {
//   //   const url = 'http://localhost:4000/v1/users';
//   //   this.http.post(url, this.userInfo).subscribe(
//   //     res => {
//   //       console.log(res);
//   //       alert('Registration successful!');
//   //     },
//   //     err => {
//   //       console.log(err);
//   //       alert('Registration failed. Please try again later.');
//   //     }
//   //   );
//   // }
// }
//
