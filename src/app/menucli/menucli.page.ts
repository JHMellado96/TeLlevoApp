import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-menucli',
  templateUrl: './menucli.page.html',
  styleUrls: ['./menucli.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenucliPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
  }

  getUserEmail() {
    return this.authService.getUserEmail();
  }

  getUserName(){
    const userEmail = this.authService.getUserEmail();
    const userName = userEmail.split('@')[0];
    return userName;
  }

  navigateToHome(){
    this.router.navigate(['/home'])
  }

}
