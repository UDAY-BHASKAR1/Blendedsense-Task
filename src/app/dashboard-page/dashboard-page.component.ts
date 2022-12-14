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

  // create a new close clicked event
  // items: any;
  // hideOnOutsideClick: any
  // upComingEventsData: any = {}
  // id: any
  // data: any;
  // data1: any;
  
  constructor(private userData: AuthenticationService, private router: Router,) { }


  ngOnInit() {
    // this.userData.getData().subscribe((result) => {
    //   this.items = result;
    //   this.data = this.items.events;
    //   console.log(this.data)
    // })

    // this.userData.getTeamData().subscribe((res) => {
    //   this.items = res;
    //   this.data1 = this.items;
    //   console.log(this.data1)
    // })
  }
 
 
  Logout(): void {
   
    localStorage.clear();
    this.router.navigate(['/login']);

    // localStorage.removeItem('userToken');
  }
}
