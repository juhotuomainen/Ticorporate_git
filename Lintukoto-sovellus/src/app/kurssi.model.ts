export class Kurssi {
  constructor(
    public kurssikoodi: string,
    public nimi: string,
    public kuva: string,
    public muistiinpanot: string,
    public tehdytTehtavat: [],
    public uudetTehtavat: [],
    public opintopisteet: number
  ) {}
}
