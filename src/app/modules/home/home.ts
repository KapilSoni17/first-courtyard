import { Component, effect, HostListener, inject, viewChild } from '@angular/core';
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  selector: 'app-home',
  imports: [EmblaCarouselDirective
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  heroEmblaRef = viewChild<EmblaCarouselDirective>('heroEmbla');
  serviceEmblaRef = viewChild<EmblaCarouselDirective>('serviceEmbla');

  private heroEmblaApi?: EmblaCarouselType;
  private serviceEmblaApi?: EmblaCarouselType;

  public options = { loop: true };
  public plugins = [Autoplay({ delay: 3000, stopOnInteraction: true })];
  public servicePlugins = [Autoplay({ delay: 3000, stopOnInteraction: true })];

  slides: string[] = [
    // 'assets/images/bird-view.jpg',
    // 'assets/images/landing-slider.jpg',
    // 'assets/images/landing-slider-2.jpg',
    'assets/images/landing-page-scroll1.jpeg',
    'assets/images/landing-page-scroll2.jpeg'
  ];

  constructor() {
    effect(() => {
      this.heroEmblaApi = this.heroEmblaRef()?.emblaApi;
      this.serviceEmblaApi = this.serviceEmblaRef()?.emblaApi;
    });
  }

  scrollPrev(): void {
    this.heroEmblaRef()?.scrollPrev();
  }

  scrollNext(): void {
    this.heroEmblaRef()?.scrollNext();
  }

  public redirectToMandawaKothi(): void {
    window.open('https://www.mandawakothi.com/', '_blank');
  }

  public isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  public serviceOptions = {
    loop: true,
    slidesToScroll: 2,
  };

  services: Service[] = [
    {
      title: 'Heritage Walk',
      description:
        'Stroll through historic streets and architectural landmarks, guided by stories that reveal the rich cultural and royal legacy of the region.',
      image: 'assets/images/fourth.png'
    },
    {
      title: 'Night Folk Dance',
      description:
        'Experience vibrant folk performances under the open sky, where rhythm, tradition, and celebration come together in an unforgettable evening.',
      image: 'assets/images/night-folk-dance.jpg'
    },
    {
      title: 'Cultural Evenings',
      description:
        'Embark on a serene camel safari across golden sands, offering breathtaking views and a glimpse into the timeless desert lifestyle.',
      image: 'assets/images/cultural-eveing.jpg'
    },
    {
      title: 'Sightseeing Tours',
      description:
        'Explore nearby forts, palaces, temples, and local markets with curated sightseeing experiences that showcase the essence of the destination.',
      image: 'assets/images/sightseeing-mandawa.png'
    },
    {
      title: 'Courtyard Evenings',
      description:
        'Unwind in our tranquil courtyards with soft lighting, music, and relaxed seating — the perfect setting for quiet conversations and peaceful moments.',
      image: 'assets/images/first-courtyard-evening.png'
    }
  ];


  public scrollServicePrev(): void {
    this.serviceEmblaRef()?.scrollPrev();

  }

  public scrollServiceNext(): void {
    this.serviceEmblaRef()?.scrollNext();
  }


  public scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 100; // adjust to your header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  rooms: Room[] = [
    {
      name: 'Delux Room',
      description: 'An elegant room, refined comfort, modern amenities, and a welcoming ambience.',
      image: 'assets/images/delux-room.png',
      bedrooms: 1,
      area: '24 sq. m',
      price: 5000
    },
    {
      name: 'Twin Room',
      description: 'A thoughtfully designed room with twin beds, offering comfort, privacy, and elegance.',
      image: 'assets/images/twin-room.png',
      bedrooms: 2,
      area: '21 sq. m',
      price: 5000
    },
    {
      name: 'Family Room',
      description: 'A spacious room designed for families, blending comfort with thoughtful design.',
      image: 'assets/images/family-room.png',
      bedrooms: 2,
      area: '64 sq. m',
      price: 7000
    }
  ];

}

export interface Room {
  name: string;
  description: string;
  image: string;
  bedrooms: number;
  area: string;
  price: number;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}
