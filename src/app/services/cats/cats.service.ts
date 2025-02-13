import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible globalement
})
export class CatsService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=9';

  async fetchCatsList(): Promise<any> {
    const response = await fetch(this.apiUrl);
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list');
    }
    return response.json();
  }
}
