import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EuService {

  name: any;
  origins: any;
  Ilove: any [];
  photo_description: any;
  photo_url: any;
  greetings: any;
  ghost: any;
  emptyPNG: any;
  

  constructor() { 
    this.name = "Diego";
    this.origins = "Barranquilla na Colômbia! :D";
    this.Ilove = [
      " as histórias bem contadas",
      " nadar feito um peixe",
      " a pizza com coca-cola",
      " e as nerdices, sim!... Star Wars, comics e ciência é comigo!",
    ];
    this.photo_description = "Este aí embaixo sou eu, brincando no tancão do AquaRio:";
    this.photo_url = "https://i.postimg.cc/2SJFyvS4/Die-Aqua.jpg";
    this.greetings = "https://www.pngkit.com/png/full/19-190719_hey-speech-bubble-png-campaa-de-prevencion-de.png";
    this.ghost = "https://i.postimg.cc/mD9ZbBvT/Ghost.gif";
    this.emptyPNG = "https://i.postimg.cc/L6pK1z1k/PNG-Fondo-Vacio.png"
    
}

  getName (): any {
    return this.name;
  }

  getOrigins (): any{
    return this.origins;
  }

  getIlove (): any {
    return this.Ilove 
  }

  getPhotoDescription (): any{
    return this.photo_description
  }

  getPhoto_url (): any {
    return this.photo_url
  }

  getGreetings (): any {
    return this.greetings
  }

  getBoo (): any {
    return this.ghost
  }

  getEmptyPNG (): any{
    return this.emptyPNG
  }

}
