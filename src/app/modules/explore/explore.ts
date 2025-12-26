import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  imports: [],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})

export class Explore {
  cities = [
    { name: 'Ramgarh', image: 'assets/images/around-mandawa1.jpeg' },
    { name: 'Nawalgarh', image: 'assets/images/around-mandawa2.jpg' },
    { name: 'Fatehpur', image: 'assets/images/around-mandawa3.png' },
    { name: 'Mahensar', image: 'assets/images/around-mandawa4.png' },
    { name: 'Churu', image: 'assets/images/around-mandawa5.jpg' },
    { name: 'Mukungarh', image: 'assets/images/around-mandawa6.jpg' }
  ];

  aroundMandawaText: string= `Nestled in the heart of the Shekhawati region, Mandawa stands as a living museum of art, history, and timeless elegance. Once a thriving trade empire along the ancient Silk Route, Shekhawati flourished for centuries as India’s commercial heartbeat. With the arrival of the British East India Company and the shift of trade routes from land to sea in the 18th century, the legendary Marwari traders moved to emerging port towns, leaving behind their grand havelis—now preserved as breathtaking symbols of Rajasthan’s golden era.

Today, Mandawa and the wider Shekhawati belt captivate travelers from across India and around the world with their intricately painted havelis, exquisite fresco artworks, and remarkable architectural brilliance. Beyond heritage tourism, Mandawa has evolved into a sought-after destination for Bollywood films, fashion and brand shoots, music videos, advertisements, web series, and royal-themed weddings—transforming this once-quiet heritage town into a vibrant global cultural canvas.`
}
