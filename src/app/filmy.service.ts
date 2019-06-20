import { Injectable } from '@angular/core';
import { Film} from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    {id:0, tytul: 'Adwokat diabła', opis: 'Kevin Lomax - wybitny adwokat, skuszony intratną propozycją pracy, przeprowadza się do Nowego Jorku. Nie zdaje sobie jednak sprawy z tego, kim jest jego chlebodawca.', rok: 1997 },
    {id:1, tytul: 'Matrix Rewolucje', opis: 'Zbuntowany program Smith rozpoczyna przejmowanie kontroli w Matrixie, a armia maszyn zbliża się do Syjonu. Jedyną nadzieją na ratunek jest Neo. ', rok: 2003 },
    {id:2, tytul: 'Dzień, w którym zatrzymała się Ziemia', opis: 'Na Ziemi pojawia się przybysz z kosmosu, który ma pokojową misję; próbuje ocalić ludzkość przed nadciągającą zagładą.', rok: 2008 },
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
