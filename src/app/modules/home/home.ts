import { Component, effect, HostListener, inject, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  selector: 'app-home',
  imports: [EmblaCarouselDirective, CommonModule],
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
    'assets/images/slider1.webp',
    'assets/images/slider2.webp',
    'assets/images/slider3.webp'
  ];

  // Text expansion states
  public isDesktop: boolean = window.innerWidth > 1024;
  public showFullAboutText: boolean = this.isDesktop;
  public showFullPaawanaText: boolean = this.isDesktop;

  // Full text content
  public aboutFullText = `First Courtyard is more than just a place to stay — it is a thoughtfully designed retreat where comfort, calm, and character come together. Nestled in a serene setting, our hotel is created for travelers who seek meaningful experiences, quiet moments, and a sense of belonging away from home.
Every element at First Courtyard is inspired by warmth and simplicity. From the moment you step inside, you are welcomed by open courtyards, soft natural light, and carefully curated interiors that blend timeless design with modern comfort. Our spaces are intentionally crafted to slow you down, inviting you to pause, unwind, and reconnect.
Our rooms are designed as personal sanctuaries, offering plush bedding, elegant finishes, and thoughtful details that elevate your stay. Whether you're visiting for a weekend escape, a business trip, or a longer stay, each room provides a peaceful environment that balances functionality with refined aesthetics.
The courtyards — our signature spaces — offer. These open-air spaces reflect our philosophy of creating harmony between architecture and nature, allowing guests to experience calm in the middle of everyday life.`;

  public aboutShortText = `First Courtyard is more than just a place to stay — it is a thoughtfully designed retreat where comfort, calm, and character come together. Nestled in a serene setting, our hotel is created for travelers who seek meaningful experiences, quiet moments, and a sense of belonging away from home...`;

  public paawanaFullText = `Paawana Restaurant at First Courtyard is a place where good food, calm surroundings, and warm hospitality come together naturally. Designed to feel inviting and unhurried, Paawana is ideal for guests who enjoy meaningful meals in a relaxed setting.
The restaurant reflects the heritage charm of the property, with simple yet elegant interiors, soft lighting, and a peaceful atmosphere. Whether you're starting your day with breakfast or winding down in the evening, Paawana offers a comfortable space to sit back and enjoy the moment.
Our menu brings together local flavors and familiar favorites, prepared with care and fresh ingredients. Traditional recipes are thoughtfully balanced with comforting classics, ensuring there's something for every palate. Each dish is cooked with attention to taste, quality, and presentation, making every meal satisfying without being overdone.
Paawana is not just about food—it's about the experience. Guests often find themselves lingering a little longer, sharing conversations, and enjoying the calm pace that defines First Courtyard. Our attentive service adds to the experience, offering warmth without intrusion and making every visit feel personal.`;

  public paawanaShortText = `Paawana Restaurant at First Courtyard is a place where good food, calm surroundings, and warm hospitality come together naturally. Designed to feel inviting and unhurried, Paawana is ideal for guests who enjoy meaningful meals in a relaxed setting...`;

  constructor() {
    effect(() => {
      this.heroEmblaApi = this.heroEmblaRef()?.emblaApi;
      this.serviceEmblaApi = this.serviceEmblaRef()?.emblaApi;
    });
  }
  
  public scrollPrev(): void {
      this.heroEmblaRef()?.scrollPrev();
    }
  
  public scrollNext(): void {
      this.heroEmblaRef()?.scrollNext();
    }

  @HostListener('window:resize', [])
  onResize(): void {
    const wasDesktop = this.isDesktop;
    this.isDesktop = window.innerWidth > 1024;

    // Auto-expand on desktop, auto-collapse on mobile
    if (this.isDesktop && !wasDesktop) {
      this.showFullAboutText = true;
      this.showFullPaawanaText = true;
    } else if (!this.isDesktop && wasDesktop) {
      this.showFullAboutText = false;
      this.showFullPaawanaText = false;
    }
  }

  public serviceOptions = {
    loop: true,
    slidesToScroll: this.isDesktop ? 2 : 1,
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
    // {
    //   title: 'Cultural Evenings',
    //   description:
    //     'Embark on a serene camel safari across golden sands, offering breathtaking views and a glimpse into the timeless desert lifestyle.',
    //   image: 'assets/images/cultural-eveing.jpg'
    // },
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

    const headerOffset = 100;
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
      name: 'Deluxe Room',
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

  // Toggle text expansion (only expands, never collapses)
  public toggleAboutText(): void {
    this.showFullAboutText = true;
  }
  
  public togglePaawanaText(): void {
    this.showFullPaawanaText = true;
  }

  // Get current text based on state
  public get aboutText(): string {
    return this.showFullAboutText ? this.aboutFullText : this.aboutShortText;
  }

  public get paawanaText(): string {
    return this.showFullPaawanaText ? this.paawanaFullText : this.paawanaShortText;
  }
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
