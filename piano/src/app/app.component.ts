import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'piano';


  public PlaySound(sound: string){
    console.log("Play sound");
    let audio = new Audio();
    audio.src = `../assets/sounds/${sound}.wav` ;
    audio.load();
    audio.play();
  }
}

