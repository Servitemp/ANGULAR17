import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-crear',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario-crear.component.html',
  styleUrl: './formulario-crear.component.css'
})
export class FormularioCrearComponent {
  isModelOpen = true;

  closeModel() {
    this.isModelOpen = false;
  }
}