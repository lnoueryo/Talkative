import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { AuthService } from '../auth/auth.service';
import { FirestoreService, IUser } from '../shared/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  uid: string;
  user: IUser = {
    displayName: null,
    photoDataUrl: null,
  };
  photo: string;

  constructor(
    public modalController: ModalController,
    public auth: AuthService,
    public firestore: FirestoreService,
    ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.uid = this.auth.getUserId();
    const user = await this.firestore.userInit(this.uid);
    if (user) {
      this.user = user;
    }
  }

  async updateProfile() {
    if (this.photo) {
      this.user.photoDataUrl = this.photo;
    }
    await this.firestore.userSet(this.user);
    this.modalController.dismiss();
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
    });
    this.photo = image && image.dataUrl;
  }

}
