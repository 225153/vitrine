import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  stats = [
    { label: 'Clients Satisfaits', value: 120, target: 120, current: 0 },
    { label: 'Projets Réalisés', value: 350, target: 350, current: 0 },
    { label: 'Années d\'Expérience', value: 10, target: 10, current: 0 }
  ];

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.animateCounters();
  }

  animateCounters() {
    // Run outside Angular's cycle to prevent ExpressionChangedAfterItHasBeenCheckedError
    this.ngZone.runOutsideAngular(() => {
      this.stats.forEach(stat => {
        const duration = 2000;
        const steps = 60;
        const stepValue = stat.target / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          stat.current = Math.min(Math.round(stepValue * currentStep), stat.target);
          
          if (currentStep >= steps) {
            clearInterval(interval);
            stat.current = stat.target;
          }

          // Manually trigger change detection to update the counter visually
          this.cdr.detectChanges();
        }, duration / steps);
      });
    });
  }
}
