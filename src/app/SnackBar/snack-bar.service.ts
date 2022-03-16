import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MatSnackBarService {

  constructor(
    private matSnackBar: MatSnackBar) { }

  excluido() {
    this.matSnackBar.open("TAREFA EXCLUÍDA!", '', { duration: 1000 });
  }
}