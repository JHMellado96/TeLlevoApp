import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'accesocli',
    loadComponent: () => import('./accesocli/accesocli.page').then( m => m.AccesocliPage)
  },
  {
    path: 'accesoadm',
    loadComponent: () => import('./accesoadm/accesoadm.page').then( m => m.AccesoadmPage)
  },
  {
    path: 'recuperar',
    loadComponent: () => import('./recuperar/recuperar.page').then( m => m.RecuperarPage)
  },
  {
    path: 'registrar',
    loadComponent: () => import('./registrar/registrar.page').then( m => m.RegistrarPage)
  },
  {
    path: 'menucli',
    loadComponent: () => import('./menucli/menucli.page').then( m => m.MenucliPage)
  },
  {
    path: 'menuadm',
    loadComponent: () => import('./menuadm/menuadm.page').then( m => m.MenuadmPage)
  },
];
