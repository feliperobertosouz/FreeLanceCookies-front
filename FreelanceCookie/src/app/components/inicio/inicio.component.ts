import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { freelances } from '../../../freelances-example';
import { FreelanceCardComponent } from "../freelance-card/freelance-card.component";
import { Oferta } from '../../model/oferta';
import { OfertasServiceService } from '../../services/ofertas-service.service';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FreelanceCardComponent, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  freelances: Oferta[] = [];
  constructor(private ofertasService: OfertasServiceService){}

  ngOnInit(): void {
    this.ofertasService.getOfertas().subscribe(ofertas => this.freelances = ofertas);
  }
}
