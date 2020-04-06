import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  valittuTervehdys;

  constructor() { }

  ngOnInit() {
    this.randomTervehdys();
  }

  // Taulukko, jossa on kaikki tervehdysvaihtoehdot sisäänkirjautuessa
  tervehdykset = [
    "Olet tehnyt upeasti hommia viime aikoina, hyvää työtä!",
    "Olet ollut mestari ajankäyttäjä. Jatka samaan malliin!",
    "Olen seurannut sinun ahkeraa työskentelyäsi. Osaat hyvin!",
    "Et ole yhtään pöllömpi tyyppi! (◉Θ◉)",
    "Kiva, että tulit taas! Sinua on aina kiva nähdä!",
    "Olet taitava! Olen sinusta ylpeä!",
    "Et taida olla eilisen teeren poikia.",
    "Hienoa katsella, kun joku osaa.",
    "Sinulla on homma hallussa! Ja vaikka ei olisikaan, otat homman kyllä aina lopulta haltuun!",
    "Tähän aktiivisuuteen ei ole kellään nokan koputtamista."
  ];
  
  //arpoo randomilla yhden kehun aiemmin luodusta taulukosta
  randomTervehdys() {
    this.valittuTervehdys = this.tervehdykset[
      Math.floor(Math.random() * this.tervehdykset.length)
    ];
  }

}
