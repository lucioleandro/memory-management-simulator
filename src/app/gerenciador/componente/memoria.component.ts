import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-memoria',
    templateUrl: './memoria.component.html'
})
export class MemoriaComponent implements OnInit, OnChanges {
    
    @Input() memoria: number[];
    vetorAuxiliar: number[];
    mostrarMapa: boolean;
    
    ngOnInit(): void {
        this.mostrarMapa = false;
        this.vetorAuxiliar = [];
        for(let i = 0; i < 32; i++) {
            this.vetorAuxiliar.push(0);
        }
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.mostrarMapa = false;
    }

    geraMapaDeBits() {
        this.mostrarMapa = true;
    }
} 