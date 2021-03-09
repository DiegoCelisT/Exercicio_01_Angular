import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) //DCT
export class EuService {

  name: any;
  origins: any;
  Ilove: any [];
  photo_description: any;
  photo_url: any;
  greetings: any;
  

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
    this.photo_url = "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/55869388_10156719801029024_9185843252572454912_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=c_rkAWTglZkAX_YO47R&_nc_ht=scontent.fsdu5-1.fna&oh=6510dbf0088fc5f93318a21fcc20ac51&oe=606B358F";
    this.greetings = "https://www.pngkit.com/png/full/19-190719_hey-speech-bubble-png-campaa-de-prevencion-de.png"
    
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

}
