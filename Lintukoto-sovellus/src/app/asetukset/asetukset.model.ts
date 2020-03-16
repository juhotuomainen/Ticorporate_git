export class Asetukset {
  constructor(
    public aloituspaiva: Date,
    public ryhmatunnus: string,
    public opintopisteet: number,
    public yhteisetTuokiot: string,
    public pollojenNakyminen: boolean,
    public henkipolloOpinnot: boolean,
    public henkipolloElama: boolean,
    public henkipolloValistus: boolean,
    public aamupaiva: boolean,
    public iltapaiva: boolean,
    public milloinVain: boolean
  ) {}
}
