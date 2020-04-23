import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public students: Estudiante[];

  constructor(private service: EstudianteService) { // inyectar atributo estudianteService
    this.service.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as any
        } as Estudiante;
      });
    });

  }
}
