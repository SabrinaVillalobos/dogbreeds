import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lottieConfig: Object;
  isChecked: boolean;
  constructor()
{
    this.lottieConfig = {
      path: "assets/json/dog-lottie.json",
      autoplay: true,
      loop: true
    };
  }
  ngOnInit() {
  }

}
