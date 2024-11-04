import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DogApiService } from 'src/services/API/dog-api.service';
import { debounceTime,distinctUntilChanged,startWith } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  breeds: any[] = [];
  filteredBreeds: any[] = [];
  randomImages: string[] = [];
  searchControl: FormControl = new FormControl('');

  constructor(private dogApiService: DogApiService) {}

  ngOnInit() {
    this.loadBreeds();
    this.loadRandomImages(); 

    //barra de búsqueda
    this.searchControl.valueChanges
      .pipe(
        startWith(''), 
        debounceTime(300), 
        distinctUntilChanged()
      )
      .subscribe((searchTerm) => this.filterBreeds(searchTerm));
  }

  loadBreeds() {
    this.dogApiService.getBreeds().subscribe(
      (data) => {
        this.breeds = data;
        this.filteredBreeds = data;
      },
      (error) => console.error('Error al obtener las razas:', error)
    );
  }

  filterBreeds(searchTerm: string) {
    this.filteredBreeds = this.breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  loadRandomImages() {
    this.dogApiService.getRandomDogImages(5).subscribe(
      (data) => {
        this.randomImages = data.map((img: any) => img.url);
        console.log('Imágenes aleatorias:', this.randomImages);
      },
      (error) => console.error('Error al obtener las imágenes:', error)
    );
  }
}
