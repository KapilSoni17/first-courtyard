import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  rooms: Room[] = [
    {
      name: 'Courtyard Double Room',
      description: `Designed for comfort and calm, the Courtyard Double Room offers a peaceful stay infused with the charm of Mandawa's heritage. Thoughtfully furnished with beautiful vintage pieces from the region, the room reflects timeless Rajasthani elegance. Clean, spacious, and welcoming, it is ideal for couples or solo travelers seeking a cozy retreat after a day of exploration.`,
      image: 'assets/images/delux-room.png',
      bedrooms: 1,
      area: '24 sq. m',
      price: 5000,
      occupancy: 2
    },
    {
      name: 'Heritage Twin Room',
      description: `The Heritage Twin Room blends practicality with old-world charm. Featuring two comfortable separate beds, this room is perfect for friends or companions traveling together. Soft lighting, handcrafted vintage furniture, and a soothing ambiance create a warm and restful environment while preserving the authentic character of this historic town.`,
      image: 'assets/images/twin-room.png',
      bedrooms: 2,
      area: '24 sq. m',
      price: 5000,
      occupancy: 2
    },
    {
      name: 'Family Courtyard Suite',
      description: `Spacious, elegant, and thoughtfully designed, the Family Courtyard Suite is perfect for families or small groups. With two comfortable double beds and ample space to relax, the room combines modern comfort with traditional vintage furniture sourced from the region. Its warm interiors and refined details make it feel like a home rooted in heritage`,
      image: 'assets/images/family-room.png',
      bedrooms: 2,
      area: '64 sq. m',
      price: 7000,
      occupancy: 4
    }
  ];

  public isDesktop: boolean = window.innerWidth > 1024;
  public showFullAboutText: boolean = this.isDesktop;

  public toggleAboutText(): void {
    this.showFullAboutText = true;
  }

  // Get current text based on state
  public get aboutText(): string {
    return this.showFullAboutText ? this.aboutFullText : this.aboutShortText;
  }

  public aboutFullText = `First Courtyard is a blend of heritage modern design hotel in Mandawa, Rajasthan, offering a comfortable and authentic stay in the heart of the historic town. Built around a traditional courtyard, the hotel beautifully blends heritage architecture with modern comfort. The rooms are clean, spacious, and thoughtfully designed, featuring handcrafted vintage furniture from the Shekhawati region that reflects the cultural richness of Mandawa. Ideal for couples, families, and cultural travellers, the hotel provides a peaceful atmosphere with personalised hospitality.

Located in the main area of Mandawa, Hotel First Courtyard is close to major attractions such as Mandawa Fort, heritage havelis, local markets, and cultural landmarks. Guests can easily explore the town on foot while enjoying a quiet retreat within the hotel’s serene courtyard. Whether you are visiting Mandawa for heritage tourism, a relaxing getaway, or an authentic Rajasthani experience, Hotel First Courtyard offers one of the best heritage stays in Mandawa with warmth, comfort, and timeless charm.`;

  public aboutShortText = `First Courtyard is a blend of heritage modern design hotel in Mandawa, Rajasthan, offering a comfortable and authentic stay in the heart of the historic town. Built around a traditional courtyard, the hotel beautifully blends heritage architecture with modern...`;

}

export interface Room {
  name: string;
  description: string;
  image: string;
  bedrooms: number;
  area: string;
  price: number;
  occupancy: number;
}