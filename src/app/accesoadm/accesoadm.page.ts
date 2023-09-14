import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-accesoadm',
  templateUrl: './accesoadm.page.html',
  styleUrls: ['./accesoadm.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccesoadmPage implements OnInit {

  email: string = '';

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
  }

  login() {
    if (this.email.trim() !== '') {
      this.authService.setUserEmail(this.email);
      console.log('Correo electrónico guardado:', this.email);
    }
  }

  navigateToMenuAdministradores(){
    this.router.navigate(['/menuadm'])
  }

  navigateToRecuperar(){
    this.router.navigate(['/recuperar'])
  }

}
