import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.page.html',
  styleUrls: ['./playing.page.scss'],
})
export class PlayingPage implements OnInit {
  PickUpThemeNumber: number;
  NextTheme = '';

  constructor() { }

  ngOnInit() {
  }

  NextThemeButton()  {
    this.PickUpThemeNumber = Math.floor(Math.random() * 5);
    if (this.PickUpThemeNumber === 0) {
      this.NextTheme = '趣味は何ですか？';
    }
    if (this.PickUpThemeNumber === 1) {
      this.NextTheme = '好きな食べ物は何ですか？';
    }
    if (this.PickUpThemeNumber === 2) {
      this.NextTheme = 'お仕事は何してますか？';
    }
    if (this.PickUpThemeNumber === 3) {
      this.NextTheme = '好きな芸能人は誰ですか？';
    }
    if (this.PickUpThemeNumber === 4) {
      this.NextTheme = '出身はどこですか?';
    }
  }

}
