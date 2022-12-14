import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  
  
  constructor(private userData: AuthenticationService, private router: Router,) { }


  ngOnInit() {
   
  }
 
 
  Logout(): void {
   
    localStorage.clear();
    this.router.navigate(['/login']);

    
  }
}
