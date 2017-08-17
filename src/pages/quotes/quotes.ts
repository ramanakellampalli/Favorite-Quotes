import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  //ionViewDidLoad() {
  //  this.quoteGroup = this.navParams.data;
  // Add elvis operator (?) in template to use this approach
  //}

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you Sure?',
      message: 'You want to add this quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuotesToFavorites(selectedQuote);
          }
        },
        {
          text: 'No. I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }

  onRemoeFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
