import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  title = 'My To Do List';
  profil = 'Mon profil';
  logout = 'Déconnexion';
  inscription = 'S\'inscrire';
  connexion = 'Se connecter';
  isConnected = true;

  

  constructor() { }

  ngOnInit() {
  }


}
