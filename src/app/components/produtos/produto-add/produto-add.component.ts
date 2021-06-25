import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styleUrls: ['./produto-add.component.scss']
})
export class ProdutoAddComponent implements OnInit {
  form!: FormGroup;
  produto = {} as Produto;

  get f():any {
    return this.form.controls;
  }

  constructor(private formBuilder : FormBuilder,
              private router: ActivatedRoute,
              private produtoService: ProdutoService
    ) { }

  ngOnInit() {
    this.validation();
    this.carregarEvento();
  }

  public validation(): void {
    this.form = this.formBuilder.group({
      nome: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(10)]
      ],
      quantidade: ['', Validators.required]
    })
  }

  public carregarEvento(): void {
    const produtoIdParam = this.router.snapshot.paramMap.get('id');

    if(produtoIdParam !== null ) {
      this.produtoService.getPeodutoById(+produtoIdParam).subscribe({
        next: (produto: Produto) => {
          this.produto = {...produto}; //copiando produto e não apotando para o espaço de memoria
          this.form.patchValue(this.produto);
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {},
      });
    }
    
  }


  salvarAlteracao(){

  }

}
