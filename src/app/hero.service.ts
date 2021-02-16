import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {
      id: 1,
      name: 'Iron Man',
      superPower: 'armor',
      address: 'Manhattan',
    },
    {
      id: 2,
      name: 'Elektra',
      superPower: 'warrior',
      address: 'Los Angeles',
    },
    {
      id: 3,
      name: 'Captain America',
      superPower: 'powerful',
      address: 'New York',
    },
    {
      id: 4,
      name: 'Batman',
      superPower: 'protector',
      address: 'Gotham City',
    },
    {
      id: 5,
      name: "Thor",
      superPower: 'god',
      address: 'Asgard ',
    },
  ];

  constructor() { }

  getAll():Hero[] {
    return this.heroes;
  }
}
