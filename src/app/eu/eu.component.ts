import { Component, OnInit } from '@angular/core';
import { EuService } from '../services/eu.service';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  meuNome: any;
  meusOrigens: any;
  meusGostos: any;
  descricaoDaMinhaFoto: any;
  minhaUrlDaFoto: any;
  cumprimento: any;

  //Eventos mouseover e mouseout, deu trabalho mas AMEI!!!!!!!! <3
  Mouse: any = "OFF";
  mouseNoDiego () {
    this.Mouse = "ON"
  }
  mouseSemDiego () {
    this.Mouse = "OFF"
  }

  constructor(eu: EuService) { 
    this.meuNome = eu.getName ();
    this.meusOrigens = eu.getOrigins ();
    this.meusGostos = eu.getIlove ();
    this.descricaoDaMinhaFoto = eu.getPhotoDescription ();
    this.minhaUrlDaFoto = eu.getPhoto_url ();
    this.cumprimento = eu.getGreetings ();
  }




  ngOnInit(): void {
  }

}
