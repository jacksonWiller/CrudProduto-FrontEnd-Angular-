import { Component, OnInit, TemplateRef } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service'




@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  // providers: [ProdutoService]
})

export class ProdutosComponent implements OnInit {
  public produtos: Produto[] = [];
  public modalRef!: BsModalRef;
  public produtoId = 0;


  constructor(private produtoService: ProdutoService,
              private modalService: BsModalService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService
            
    ) { }

  ngOnInit() {
    this.getProdutos();
  }

  openModal(event: any, template: TemplateRef<any>, produtoId: number): void {
    event.stopPropagation();
    this.produtoId = produtoId;
    this.modalRef = this.modalService.show(template);
  }

  confirm():void {
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.modalRef.hide();
  }

  decline():void {
    this.modalRef.hide();
  }

  salvarAlteracao(){

  }

  //Get eventos observibles
  public getProdutos(): void {
    this.produtoService.getAllProdutos().subscribe({
      next: (produtos: Produto[]) => {
        this.produtos = produtos;
      },
      error: (error: any) => {
        this.spinner.show();
        this.toastr.error('Erro ao Carregar os Eventos', 'Erro!');
        },
      complete: () => this.spinner.hide()
    });
  }

}
