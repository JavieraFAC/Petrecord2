import { Component, OnInit, inject } from '@angular/core';
import { Especie } from 'src/app/models/especies.model';
import { FirebaseService } from 'src/services/firebase.service';
import { CargandoService } from 'src/services/cargando/cargando.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurarcuenta',
  templateUrl: './configurarcuenta.page.html',
  styleUrls: ['./configurarcuenta.page.scss'],
})
export class ConfigurarcuentaPage implements OnInit {

  especies: Especie[] = [];
  especiesSeleccionadas: Especie[] = [];

  // Inyección de dependencias
  cargandoS = inject(CargandoService);
  router = inject(Router);
  firebaseS = inject(FirebaseService);

  constructor() {
    // Inicializa las especies con su ID y nombre
    this.especies = [
      { id: 1, nombre: 'Araña/Tarántula', seleccionada: false },
      { id: 2, nombre: 'Ave Ornamental', seleccionada: false },
      { id: 3, nombre: 'Ave Rapaz', seleccionada: false },
      { id: 4, nombre: 'Avícola', seleccionada: false },
      { id: 5, nombre: 'Bovino', seleccionada: false },
      { id: 6, nombre: 'Canino', seleccionada: false },
      { id: 7, nombre: 'Conejo', seleccionada: false },
      { id: 8, nombre: 'Equino', seleccionada: false },
      { id: 9, nombre: 'Exótico', seleccionada: false },
      { id: 10, nombre: 'Erizo', seleccionada: false },
      { id: 11, nombre: 'Felino', seleccionada: false },
      { id: 12, nombre: 'Ovino', seleccionada: false },
      { id: 13, nombre: 'Pez', seleccionada: false },
      { id: 14, nombre: 'Porcino', seleccionada: false },
      { id: 15, nombre: 'Reptil', seleccionada: false },
      { id: 16, nombre: 'Roedor', seleccionada: false },
      { id: 17, nombre: 'Otra', seleccionada: false }
    ];
  }

  ngOnInit() {
    // Cada vez que se cargue el componente, asegurarse de cargar las especies seleccionadas
    this.cargarEspeciesSeleccionadas();
  }

  // Método para cargar especies seleccionadas de localStorage
  cargarEspeciesSeleccionadas() {
    const seleccionadas = localStorage.getItem('especiesSeleccionadas');
    if (seleccionadas) {
      this.especiesSeleccionadas = JSON.parse(seleccionadas);
      // Actualiza el estado de selección de cada especie
      this.especies.forEach(especie => {
        especie.seleccionada = !!this.especiesSeleccionadas.find(sel => sel.id === especie.id);
      });
    }
  }

  // Método para guardar las especies seleccionadas en localStorage y en Firebase
  async guardarSeleccion() {
    try {
      // Filtra las especies seleccionadas
      this.especiesSeleccionadas = this.especies.filter(especie => especie.seleccionada);
      
      // Guarda las especies seleccionadas en localStorage
      localStorage.setItem('especiesSeleccionadas', JSON.stringify(this.especiesSeleccionadas));
      console.log('Especies seleccionadas guardadas:', this.especiesSeleccionadas);
      
      // Guarda las especies seleccionadas en Firebase (si deseas agregar esta funcionalidad)
      // await this.firebaseS.guardarEspeciesSeleccionadas(this.especiesSeleccionadas);

      // Mostrar mensaje de éxito
      this.cargandoS.presentToast({
        message: 'Especies seleccionadas guardadas exitosamente.',
        duration: 1500,
        color: 'success',
        position: 'middle',
      });

      // Redirige al perfil después de 1.5 segundos
      setTimeout(() => {
        this.router.navigate(['/perfil']); // Ruta del perfil
      }, 1500);

    } catch (error) {
      console.error('Error al guardar las especies:', error);

      // Mostrar mensaje de error si ocurre algún problema
      this.cargandoS.presentToast({
        message: 'Hubo un error al guardar las especies.',
        duration: 1500,
        color: 'danger',
        position: 'middle',
      });
    }
  }
}
