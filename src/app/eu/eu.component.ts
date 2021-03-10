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
  fantasminha: any;
  PNGVazio: any;

  //Eventos mouseover e mouseout, deu trabalho mas AMEI!!!!!!!! <3
  Mouse: any = "OFF";
  mouseComDiego () {
    this.Mouse = "ON"
  }
  mouseSemDiego () {
    this.Mouse = "OFF"
  }
  Mouse2: any = "OFF";
  mouseComBOO () {
    this.Mouse2 = "ON"
  }
  mouseSemBOO () {
    this.Mouse2 = "OFF"
  }

  constructor(eu: EuService) { 
    this.meuNome = eu.getName ();
    this.meusOrigens = eu.getOrigins ();
    this.meusGostos = eu.getIlove ();
    this.descricaoDaMinhaFoto = eu.getPhotoDescription ();
    this.minhaUrlDaFoto = eu.getPhoto_url ();
    this.cumprimento = eu.getGreetings ();
    this.fantasminha = eu.getBoo ();
    this.PNGVazio = eu.getEmptyPNG ();
  }

  ngOnInit(): void {//DCT
  }

}
