import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-accesocli',
  templateUrl: './accesocli.page.html',
  styleUrls: ['./accesocli.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccesocliPage implements OnInit {

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

  navigateToMenuClientes(){
    this.router.navigate(['/menucli'])
  }

  navigateToRecuperar(){
    this.router.navigate(['/recuperar'])
  }

}
