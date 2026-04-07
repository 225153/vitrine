import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  currentIndex = 0;
  testimonials = [
    {
      name: 'Sophie Laurent',
      role: 'CEO, InnovTech',
      text: 'L\'équipe a su capturer l\'essence de notre marque pour créer un site internet à la fois performant, esthétique et très convertissant.',
      avatar: 'https://i.pravatar.cc/150?img=47'
    },
    {
      name: 'Marc Dubois',
      role: 'Fondateur, Dubois & Fils',
      text: 'Un accompagnement au top du début à la fin. Notre nouvelle application mobile est saluée par l\'ensemble de nos utilisateurs.',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Julie Moreau',
      role: 'Directrice Marketing, EcoSol',
      text: 'Leur expertise en SEO et UX design a permis de doubler nos ventes en seulement 6 mois. Un grand merci pour votre professionnalisme.',
      avatar: 'https://i.pravatar.cc/150?img=44'
    }
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  setIndex(i: number) {
    this.currentIndex = i;
  }
}
