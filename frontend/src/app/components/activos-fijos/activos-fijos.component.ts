import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivosService } from '../../services/activos.service';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormularioCrearComponent } from '../formulario-crear/formulario-crear.component';

@Component({
  selector: 'app-activos-fijos',
  standalone: true,
  imports: [CommonModule, FormularioCrearComponent],
  templateUrl: './activos-fijos.component.html',
  styleUrl: './activos-fijos.component.css'

})
export class ActivosFijosComponent implements OnInit {
  modalRef?: BsModalRef;
  activosData: any[] = [];

  constructor(
    private activosService: ActivosService,
    private modalService: BsModalService
    ) {}

  ngOnInit(): void {
    this.obtenerActivos();
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  obtenerActivos(): void {
    this.activosService.obtenerTodosActivos().subscribe(
      (data) => {
        this.activosData = data;
      },
      (error) => {
        console.error('Error al obtener activos:', error);
      }
    );
  }

  // openModel() {
  //   this.isModelOpen = true;
  // }

  // closeModel() {
  //   this.isModelOpen = false;
  //   this.obtenerActivos();
  // }
}
