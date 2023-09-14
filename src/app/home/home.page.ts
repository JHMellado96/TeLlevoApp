import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  constructor(private router: Router) {

  }

  navigateToAccesoClientes(){
    this.router.navigate(['/accesocli'])
  }

  navigateToAccesoAdmin(){
    this.router.navigate(['/accesoadm'])
  }

  navigateToRegistrar(){
    this.router.navigate(['/registrar'])
  }

}
