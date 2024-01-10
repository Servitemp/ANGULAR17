import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-crear',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './formulario-crear.component.html',
  styleUrl: './formulario-crear.component.css'
})
export class FormularioCrearComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

}