import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styleUrls: ['./produto-add.component.scss']
})
export class ProdutoAddComponent implements OnInit {
  form!: FormGroup;
  get name() { return this.profileForm.get('firstName')};
  
  profileForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  constructor() { }

  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    this.form = new FormGroup({
      nome: new FormControl(
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      quantidade: new FormControl('')
    })
  }

  get nome() { return this.form.get('nome') };

  salvarAlteracao(){

  }

}
