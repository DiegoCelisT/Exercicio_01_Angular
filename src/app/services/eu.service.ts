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
    this.photo_url = "https://scontent.fsdu5-1.fna.fbcdn.net/v/t1.0-9/55869388_10156719801029024_9185843252572454912_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=c_rkAWTglZkAX_YO47R&_nc_ht=scontent.fsdu5-1.fna&oh=6510dbf0088fc5f93318a21fcc20ac51&oe=606B358F";
    this.greetings = "https://www.pngkit.com/png/full/19-190719_hey-speech-bubble-png-campaa-de-prevencion-de.png";
    this.ghost = "https://64.media.tumblr.com/aec8ce5e5fcbca3e4958c5a317a0abb2/tumblr_mk0udxwKEy1s5zwimo1_400.gif";
    this.emptyPNG = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01e1a88f-c290-49fa-afe8-f4a6c31abe22/d4obm1n-37607dd5-93a8-43cc-b920-2c36e0304986.png/v1/fill/w_900,h_800,strp/fondo_png_vacio_by_carogugliottajb_d4obm1n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MDAiLCJwYXRoIjoiXC9mXC8wMWUxYTg4Zi1jMjkwLTQ5ZmEtYWZlOC1mNGE2YzMxYWJlMjJcL2Q0b2JtMW4tMzc2MDdkZDUtOTNhOC00M2NjLWI5MjAtMmMzNmUwMzA0OTg2LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1mq0sjcQUOe6bkfdIdou1x82ZPj074-SlVtcRE6Pknw"
    
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
