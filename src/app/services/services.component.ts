import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatRippleModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'desktop_mac',
      title: 'Création de Sites Web',
      description: 'Des sites vitrines et e-commerce sur mesure, rapides et optimisés pour la conversion.'
    },
    {
      icon: 'smartphone',
      title: 'Applications Mobiles',
      description: 'Des applications natives et hybrides performantes pour iOS et Android.'
    },
    {
      icon: 'brush',
      title: 'UI/UX Design',
      description: 'Des interfaces élégantes, intuitives et centrées sur l\'expérience de vos utilisateurs.'
    },
    {
      icon: 'trending_up',
      title: 'SEO & Marketing',
      description: 'Acquisition de trafic, optimisation pour les moteurs de recherche et campagnes.'
    },
    {
      icon: 'security',
      title: 'Cybersécurité',
      description: 'Protection de vos données et audit de sécurité complet de vos infrastructures.'
    },
    {
      icon: 'cloud',
      title: 'Hébergement Cloud',
      description: 'Des solutions cloud hautement disponibles, scalables et sécurisées.'
    }
  ];
}
