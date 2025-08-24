import {Component, signal, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ApiService} from './homepage.service';
import {NavbarComponent} from '../common/navbar/navbar.component';
import {FooterComponent} from '../common/footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class HomepageComponent implements OnInit {
  message = signal<string>('Chargement...');

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getProfile().subscribe({
      next: response => {
        this.message.set(response.name);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération du profil:', error);
        this.message.set('Erreur API');
      }
    });
  }
}
