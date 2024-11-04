import { Component, Input, OnInit, inject } from '@angular/core';
import { CargandoService } from 'src/services/cargando/cargando.service';

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

cargandoS = inject(CargandoService);

  ngOnInit() {}


  dismissModal(){
    this.cargandoS.dismissmodal();
    

  }

}
