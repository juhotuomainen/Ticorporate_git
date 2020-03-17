import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  valittuKehu;

  constructor() { }

  ngOnInit() {
    this.randomKehu();
  }

  // Taulukko, jossa on kaikki kehuvaihtoehdot
  kehut = [
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
  randomKehu() {
    this.valittuKehu = this.kehut[
      Math.floor(Math.random() * this.kehut.length)
    ];
  }

}
