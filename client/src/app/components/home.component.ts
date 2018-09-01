import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html',
})

export class HomeComponent implements OnInit {
    public titulo: string;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Inicio';
    }

    ngOnInit(){
        console.log('home.component.ts cargado');

        // Conseguir el listado de artistas
    }
}