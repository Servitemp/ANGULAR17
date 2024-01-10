import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../services/activos.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormularioCrearComponent } from '../formulario-crear/formulario-crear.component';

@Component({
  selector: 'app-activos-fijos',
  standalone: true,
  imports: [CommonModule, FormularioCrearComponent],
  templateUrl: './activos-fijos.component.html',
  styleUrl: './activos-fijos.component.css'

})
export class ActivosFijosComponent implements OnInit {
  activosData: any[] = [];

  constructor(
    private activosService: ActivosService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.obtenerActivos();
  }

  // abrirModal() {
  //   this.dialog.open(FormularioCrearComponent);
    
  // }

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

  abrirModal() {
    this.dialog.open(FormularioCrearComponent, {
      width: 'auto',
      height: 'auto',
      position: { top: '-50%', left: '10%' }, // Centrar en la pantalla
    });
  }

    // abrirModal() {
  //  this.dialog.open(FormularioCrearComponent, {
  //     width: 'auto',
  //     height: 'auto',
  //     position: { top: '1%', left: '25%' },
  //     autoFocus: false, // Para desactivar el enfoque automático en el primer elemento del diálogo
  //   });
  // }

  // openModel() {
  //   this.isModelOpen = true;
  // }

  // closeModel() {
  //   this.isModelOpen = false;
  //   this.obtenerActivos();
  // }
}
