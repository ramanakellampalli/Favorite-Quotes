import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor (private viewCtrl: ViewController,
               private navParms: NavParams) {
  }

  ionViewDidLoad() {
    this.person = this.navParms.get('person');
    this.text = this.navParms.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
