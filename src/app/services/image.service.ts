import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }

}

const IMAGES = [
  {"id": 1, "category": "animals", "caption": "A fluffy puppy", "url": "assets/img/animals-q-g-500-500-8.jpg"},
  {"id": 2, "category": "cities", "caption": "A city skyline", "url": "assets/img/city-q-c-500-500-8.jpg"},
  {"id": 3, "category": "cities", "caption": "Golden Gate bridge", "url": "assets/img/city-q-g-500-500-9.jpg"},
  {"id": 4, "category": "cities", "caption": "Asian city district", "url": "assets/img/city-q-g-500-500-10.jpg"},
  {"id": 5, "category": "people", "caption": "A lounging woman", "url": "assets/img/fashion-q-g-500-500-1.jpg"},
  {"id": 6, "category": "people", "caption": "A fashion runway", "url": "assets/img/fashion-q-g-500-500-5.jpg"},
  {"id": 7, "category": "people", "caption": "A banquet party bar", "url": "assets/img/nightlife-q-c-500-500-8.jpg"},
  {"id": 8, "category": "people", "caption": "A masked face", "url": "assets/img/people-q-c-500-500-7.jpg"},
  {"id": 9, "category": "sports", "caption": "A motocross bike jump", "url": "assets/img/sports-q-c-500-500-5.jpg"},
  {"id": 10, "category": "technology", "caption": "Earbuds", "url": "assets/img/technics-q-c-500-500-5.jpg"}
];
