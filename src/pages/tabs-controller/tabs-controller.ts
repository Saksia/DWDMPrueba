import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PopularPage } from '../popular/popular';
import { myProfilePage } from '../myProfile/myProfile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = PopularPage;
  tab3Root: any = myProfilePage;
  constructor(public navCtrl: NavController) {
  }

}
