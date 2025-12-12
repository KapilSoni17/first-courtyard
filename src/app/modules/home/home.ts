import { Component, effect, viewChild } from '@angular/core';
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  selector: 'app-home',
  imports: [    EmblaCarouselDirective
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 private emblaRef = viewChild<EmblaCarouselDirective>(EmblaCarouselDirective);
  
  private emblaApi?: EmblaCarouselType
  public options = { loop: true }
  public plugins = [Autoplay({ delay: 333000, stopOnInteraction: true })];

   slides = [
    // 'assets/images/hotel1.png',
    // 'assets/images/hotel2.png',
    // 'assets/images/hotel3.png',
    // 'assets/images/hotel4.png'
    'assets/images/hotel-coomin-soon-1.jpg',
    'assets/images/hotel-coomin-soon-2.jpg'
  ];

  constructor(){
    effect(() => {
      this.emblaApi = this.emblaRef()?.emblaApi;
    });
  }
}
