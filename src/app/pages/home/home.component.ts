import { Component, HostListener, inject } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';
import { GenericHttpService } from '../../services/generic-http.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, NgClass, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private http = inject(GenericHttpService);
  isActiveFaq = false

  ngOnInit() {
    this.http.getAllProducts().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => console.log(err),
    });
  }


  currentState: string = 'opacity-0'
  lastY = 0
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 350) { this.currentState = 'opacity-100' }
    else {
      this.currentState = 'opacity-0'

    }
  }
  onClickFloating() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  activeIndex: number | null = null;

  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be unused and in original packaging.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 3–5 business days depending on your location.'
    },
    {
      question: 'How much does shipping cost?',
      answer: 'Shipping is free on orders over $50. Otherwise, a flat rate of $5 applies.'
    }
  ];
}
