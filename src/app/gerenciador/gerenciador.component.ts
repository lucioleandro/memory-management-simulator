import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Processo } from '../models/processo';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './gerenciador.component.html'
})
export class GerenciadorMemoriaComponent implements OnInit {

    cadastroProcesso: FormGroup;
    tiposProcesso: any[];
    processo: Processo;

    memoria: number[];

    constructor(private formBuilder: FormBuilder,
                private messageService: MessageService) {}

    ngOnInit(): void {
        this.buildForm();
        this.buildTiposProcesso();
        this.cleanProcesso();
        this.memoria = [];
    }

    registraProcesso() {
        if (this.processo.tipoProcesso === 'funcional') {
            if (this.temEspaco(this.processo.tamanhoProcesso)) {
                this.alocaMemoria(1);
                this.cleanProcesso();
                return;
            }
            this.showInfoMessage();
            return;
        }
        if (this.temEspaco(this.processo.tamanhoProcesso)) {
            this.alocaMemoria(0);
            this.cleanProcesso();
            return;
        }
        this.showInfoMessage();
    }

    private alocaMemoria(valor: number) {
        while (this.processo.tamanhoProcesso--) {
            this.memoria.push(valor);
        }
    }
    
    private temEspaco(tamanhoProcesso: number) {
        return (tamanhoProcesso + this.memoria.length) <= 32;
    }

    resetarMemoria() {
        this.memoria = [];
    }
    
    private cleanProcesso() {
        this.processo = {nome: '', tipoProcesso: '', tamanhoProcesso: null};
    }
    
    private showInfoMessage() {
        this.messageService.add({
        severity: 'info', summary: 'Não há mais espaço para alocação',
            detail: 'A memória não possui espaço para armazenar um processo com esse tamanho'
        });
    }
    
    private buildTiposProcesso() {
        this.tiposProcesso = [{label: 'funcional', value: 'funcional'},
        {label: 'vazio', value: 'vazio'}];
    }
    
    private buildForm() {
        this.cadastroProcesso = this.formBuilder.group({
            nome: ['', [Validators.required]],
            tipo: [''],
            tamanho: ['', [
                Validators.required,
            ]],
        });
    }

}