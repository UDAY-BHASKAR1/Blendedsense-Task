import { Component, OnInit} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  formSubmitted = false;
  
  login= new FormGroup({
     email:new FormControl("",[Validators.required,Validators.email]),
     pwd:new FormControl("",[Validators.required]),
  });
 
  // get uname(){return this.login.get('uname')}

  title = 'toaster-not';
  loginUserData:any={};
  dataItem:any={}
  timer:any
  timeOut:number
  constructor(private postData:AuthenticationService,private toastr:ToastrService,private router:Router){

  }

  ngOnInit() {
    // if there is token in localstorage navigate to todo
    if (!!localStorage.getItem('token')==null) {
      // return this.router.navigate(['/login']);
    } else {
      return this.router.navigate(['/Dashboard'])
    }
   
  }
  
  onSubmit(): void{
   console.log(this.loginUserData);
      this.postData.getUser(this.loginUserData).subscribe(res=>{
        // console.log(res)
        this.dataItem=res;
        console.log(this.dataItem.token)
        localStorage.setItem('token',this.dataItem.token)
        
      this.toastr.success("login succesfull",null, { timeOut: 1000 })
      this.timer=setTimeout (()=> {
      this.router.navigate(['/Dashboard']);
      },1000);
       },
       err=>{
       
        this.toastr.error("Invalid User Details",null, { timeOut: 1000 })
       }
       )
  }
}
