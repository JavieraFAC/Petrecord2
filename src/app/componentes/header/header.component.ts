import { Component, Input, OnInit, inject } from '@angular/core';
import { CargandoService } from 'src/services/cargando/cargando.service';
import { FirebaseService } from 'src/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

      // para darle parametros
      @Input() title!: string;
      @Input() backButton!: string;
      @Input() isModal!:boolean;
      showMenuButton:boolean = false;

cargandoS = inject(CargandoService);
firebaseS = inject(FirebaseService);
constructor(private firebaseService: FirebaseService, private router: Router) {}


  ngOnInit() {
        // Actualiza showMenuButton en función del estado de autenticación y la ruta actual
        this.firebaseS.isAuthenticated$.subscribe(isAuthenticated => {

          const currentRoute = this.router.url;
          this.showMenuButton = isAuthenticated ;
        });
    
        // Detecta los cambios de ruta en tiempo real para ocultar/mostrar el botón
        this.router.events.subscribe(() => {

          const currentRoute = this.router.url;

        });
      }

  dismissModal(){
    this.cargandoS.dismissmodal();
    

  }

}
