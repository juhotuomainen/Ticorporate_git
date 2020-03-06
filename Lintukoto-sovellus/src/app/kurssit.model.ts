export class Kurssit {
  constructor(
    public kurssikoodi: string,
    public nimi: string,
    public kuvaus: string,
    public sisältö: [],
    public opintopisteet: number,
    public pöllö: string,
    public koulutusohjelma: string,
    public kuva: string
  ) {}
}
