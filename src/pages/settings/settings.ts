import { Component } from '@angular/core';
import {Toggle} from "ionic-angular";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  onToggle(toggle: Toggle) {
    console.log(toggle);
  }
}
