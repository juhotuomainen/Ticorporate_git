export class User {
  constructor(
    public tunnus: string,
    public aktiiviset_kurssit: [],
    public asetukset: Object,
    public suoritetut_kurssit: [],
    public opintopisteet: number
  ) {}
}
