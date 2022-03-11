import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


form = this.fb.group({
  nome: [null, [Validators.required, Validators.minLength(4)]],
  idade: [null, Validators.required],
  telefone: this.fb.array([
    this.fb.control('')
  ])
})


get telefone() { //para ter controle no form "controle de matriz" (cria a variavel)
  return this.form.get('telefone') as FormArray;
}

get nome() { return this.form.get('nome'); } //criando variavel

  ngOnInit(): void {
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value); //para pegar os valores
  }

  addTelefone() { //vai adicionando
    this.telefone.push(this.fb.control(''));
  }


}


//exemplo

// profileForm = this.fb.group({
//   firstName: ['', Validators.required],
//   lastName: [''],
//   address: this.fb.group({
//     street: [''],
//     city: [''],
//     state: [''],
//     zip: ['']
//   }),
// });

//Form não reativo
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-template-favorite-color',
//   template: `
//     Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
//   `
// })
// export class FavoriteColorComponent {
//   favoriteColor = '';
// }



//form-reativo
// import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-reactive-favorite-color',
//   template: `
//     Favorite Color: <input type="text" [formControl]="favoriteColorControl">
//   `
// })
// export class FavoriteColorComponent {
//   favoriteColorControl = new FormControl('');
// }
