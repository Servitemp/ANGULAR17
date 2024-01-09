import { Component, OnInit } from '@angular/core';
import { ActivosService } from '../../services/activos.service';
import { CommonModule } from '@angular/common';
import { FormularioCrearComponent } from '../formulario-crear/formulario-crear.component';

@Component({
  selector: 'app-activos-fijos',
  standalone: true,
  imports: [CommonModule, FormularioCrearComponent],
  templateUrl: './activos-fijos.component.html',
  styleUrl: './activos-fijos.component.css'
  
})
export class ActivosFijosComponent implements OnInit {
  isModelOpen = false;
  activosData: any[] = [];

  constructor(private activosService: ActivosService) {}

  ngOnInit(): void {
    this.obtenerActivos();
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

  openModel() {
    this.isModelOpen = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.obtenerActivos();
  }
}
