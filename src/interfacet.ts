export interface Ohjelma {
    nimi: string,
    kesto: number,
    alku: number,
    paiva: number,
    mahdoton: Aika[],
    blokkaavatOhjelmat: BlokkaavaOhjelma[],
    luokka: string[]
  }
  
export interface BlokkaavaOhjelma {
    ohjelma: Ohjelma,
    tuntejaEnnen: number,
    tuntejaJalkeen: number
  }

export interface Aika {
    paiva: number,
    tunnit: number[]
  }
  
export interface Paiva {
    indeksi: number,
    viikonpaiva: string,
    paivamaara?: string
  }
  
export interface Tunti {
    aika: number,
    luokka: string
  }

export interface BlokkaavaOhjelmaRaaka {
    nimi: string,
    ennen: number,
    jalkeen: number
}

export interface OhjelmaRaaka {
    kesto: number,
    alku: number,
    paiva: number,
    mahdoton: Aika[],
    blokkaavatOhjelmatRaaka: BlokkaavaOhjelmaRaaka[],
    nimi: string,
    luokka: string[]
  }