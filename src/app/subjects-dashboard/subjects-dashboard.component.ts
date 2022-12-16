import { Component,OnInit } from '@angular/core';
 import { AuthenticationService } from '../authentication.service';
 import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-subjects-dashboard',
  templateUrl: './subjects-dashboard.component.html',
  styleUrls: ['./subjects-dashboard.component.css']
})
export class SubjectsDashboardComponent implements OnInit{

  items: any;
  hideOnOutsideClick: any
  upComingEventsData: any = {}
  id: any
  data: any;
  data1: any;
  
  constructor(private userData:AuthenticationService){}

  
  ngOnInit() {
    this.userData.getData().subscribe((result) => {
      this.items = result;
      this.data = this.items.events;
      console.log(this.data)
    })

    this.userData.getTeamData().subscribe((res) => {
      this.items = res;
      this.data1 = this.items;
      console.log(this.data1)
    })

    // Logout(): void {
   
    //   localStorage.clear();
    //   this.router.navigate(['/login']);
  
    //   // localStorage.removeItem('userToken');
    // }
  }

 

}
