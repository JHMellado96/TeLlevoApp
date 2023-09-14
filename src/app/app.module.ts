import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationController } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppModule {
  constructor(private animationCtrl: AnimationController) {}

  customAnimation() {
    return this.animationCtrl.create()
      .duration(500)
      .easing('ease-out');
  }
}
