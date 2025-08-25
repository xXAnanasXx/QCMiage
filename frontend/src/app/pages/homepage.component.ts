import { Component, signal, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],  // Important pour routerLink
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class HomepageComponent implements OnInit {
  message = signal<string>('Chargement...');

  constructor(private api: ApiService) {}

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
