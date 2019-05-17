import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  salvar(form){
    const nomePlanejamentos = form.value.nome
    const faturaPlanejamentos = form.value.fatura
    const custoPlanejamentos = form.value.custo

    console.log(nomePlanejamentos, faturaPlanejamentos, custoPlanejamentos)

    form.reset()
    this.nav.back()
  }

}


