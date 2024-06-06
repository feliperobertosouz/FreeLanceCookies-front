import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Freelance, freelances } from '../../../freelances-example';
import { FreelanceCardComponent } from "../freelance-card/freelance-card.component";
import { Oferta } from '../../model/oferta';
import { OfertasServiceService } from '../../services/ofertas-service.service';

@Component({
    selector: 'app-oferta',
    standalone: true,
    templateUrl: './oferta.component.html',
    styleUrl: './oferta.component.css',
    imports: [CommonModule, FreelanceCardComponent]
})
export class OfertaComponent implements OnInit {
  freelance: Oferta | undefined;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasServiceService
  ) { }

  ngOnInit(): void {
    // Primeiro obtenha o ID do produto da rota atual.
    const routeParams = this.route.snapshot.paramMap;
    const freelanceIdFromRoute = Number(routeParams.get('freelanceId'));

    // Encontre a oferta que corresponde ao ID fornecido na rota usando o serviço.
    this.ofertaService.getOfertaById(freelanceIdFromRoute).subscribe(data => {
      this.freelance = data;
    });
  }
}
