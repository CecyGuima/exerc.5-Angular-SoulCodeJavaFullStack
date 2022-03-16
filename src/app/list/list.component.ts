import { Component } from '@angular/core';
import { MatSnackBarService } from '../SnackBar/snack-bar.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  item: string = ''
  lista: string[] = this.getItem()

  constructor(private MatSnackBarService: MatSnackBarService) {}

  getItem(): any {
    return JSON.parse(localStorage.getItem('lista') || '[]')
  }

  setItem(dado: any) {
    localStorage.setItem('lista', JSON.stringify(dado))
  }

  incluirTarefa(incluir: string): void {
    this.lista.push(incluir)
    this.setItem(this.lista)
  }

  excluirTarefa(excluir: string) {
    this.lista.splice(this.lista.indexOf(excluir), 1)
    this.setItem(this.lista)
    this.MatSnackBarService.excluido()
  }

  removeLista() {
    this.lista.splice(0, this.lista.length)
    this.setItem(this.lista)
  }
}
