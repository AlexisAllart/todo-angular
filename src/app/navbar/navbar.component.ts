import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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

  

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
}
