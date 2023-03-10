import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  estaSobreElemento = false;
  archivos : FileItem[] = [];

  constructor(public _cis: CargaImagenesService) { }

  ngOnInit(): void {
  }

  cargarImagen(){
    this._cis.cargarImagenesFirebase(this.archivos)
  }

  limpiarArchivos(){
    this.archivos = [];
  }


}
