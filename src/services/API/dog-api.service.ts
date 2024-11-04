import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private apiUrl = 'https://api.thedogapi.com/v1';  // URL base de la Dog API
  private apiKey = 'live_WVXOuK6mOa1onJKIEyt0nXKoXkwgoYPlwGwXNAieOGvEilCrL9HOl7KZaKCKeEOK';  //API key

  constructor(private http: HttpClient) {}

  // Obtener listado de razas
  getBreeds(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });
    return this.http.get(`${this.apiUrl}/breeds`, { headers });
  }

// Obtener 5 imágenes aleatorias de perros
getRandomDogImages(count: number = 5): Observable<any> {
  const headers = new HttpHeaders({
    'x-api-key': this.apiKey
  });
  return this.http.get(`${this.apiUrl}/images/search?limit=${count}`, { headers });
}

}
