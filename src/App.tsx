import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import { Tunti, Ohjelma, Paiva } from "./interfacet"
import { ohjelmadata } from "./Mockohjelmadata"
import { ohjelmaAika, paivanTunnit } from "./Aika"

const ohjelmaLista: Ohjelma[] = ohjelmadata.map(ohjelma => {return {
  nimi: ohjelma.nimi,
  kesto: ohjelma.kesto,
  paiva: ohjelma.paiva,
  alku: ohjelma.alku,
  mahdoton: ohjelma.mahdoton,
  luokka: ohjelma.luokka,
  blokkaavatOhjelmat: []
}});

ohjelmadata.forEach(od => {
  const ohjelmalistaIndeksi = ohjelmaLista.findIndex(ol => ol.nimi === od.nimi)
  if (ohjelmalistaIndeksi > -1) {
    od.blokkaavatOhjelmatRaaka.forEach(br => {
      const blokkaavaIndeksiRaaka = ohjelmaLista.findIndex(b => b.nimi === br.nimi)
      if (blokkaavaIndeksiRaaka > -1) {
        ohjelmaLista[ohjelmalistaIndeksi].blokkaavatOhjelmat.push( { ohjelma: ohjelmaLista[blokkaavaIndeksiRaaka], tuntejaEnnen: br.ennen, tuntejaJalkeen: br.jalkeen})
      }
    })
  }
})

function laskeAlkutuntiRaaka(ohjelma: Ohjelma): number {
  return ohjelma.paiva * 24 + ohjelma.alku
}

function laskeLopputuntiRaaka(ohjelma: Ohjelma): number {
  return laskeAlkutuntiRaaka(ohjelma) + ohjelma.kesto
}

function laskeTunnitRaaka(ohjelma: Ohjelma): number[] {
  const tunnit: number[] = [];
  for (let i = 0; i < ohjelma.kesto; i++) {
    tunnit.push(i + ohjelma.alku + ohjelma.paiva * 24)
  }
  return tunnit
}

function ajastaRaaka(paiva: number, tunti: number): number {
  return paiva * 24 + tunti
}

function laskeTunnitAjallaRaaka(kesto: number, paiva: number, alku: number): number[] {
  const tunnit: number[] = [];
  for (let i = 0; i < kesto; i++) {
    tunnit.push(i + alku + paiva * 24)
  }
  return tunnit
}

function onkoMahdoton(ohjelma: Ohjelma, paiva: number, tunti: number): boolean {
  const mahdottomat = ohjelma.mahdoton.filter(mahdoton => mahdoton.paiva === paiva)
  const mahdottomatTunnit: number[] = []
  mahdottomat.forEach(mahdoton => mahdoton.tunnit.length > 0 ? mahdottomatTunnit.push(...mahdoton.tunnit) : mahdottomatTunnit.push(...Array(24).fill(0).map((k, i) => (k + i))))

  if (mahdottomatTunnit.findIndex(mt => mt === tunti) > -1) {
    return true;
  }

  const blokkaaviaOhjelmia = ohjelma.blokkaavatOhjelmat.map(blokki => {
    if (laskeAlkutuntiRaaka(blokki.ohjelma) < laskeAlkutuntiRaaka(ohjelma) && laskeAlkutuntiRaaka(ohjelma) < laskeLopputuntiRaaka(blokki.ohjelma) + blokki.tuntejaJalkeen) {
      return true
    } else if (laskeAlkutuntiRaaka(blokki.ohjelma) > laskeAlkutuntiRaaka(ohjelma) && laskeLopputuntiRaaka(ohjelma) + blokki.tuntejaEnnen > laskeAlkutuntiRaaka(blokki.ohjelma) ) {
      return true
    } else {
      return false
    }
  })

  if (blokkaaviaOhjelmia.findIndex(bo => bo) > -1) {
    return true;
  }

  return false
}

function laskeOhjelmanBlokkitunnit(alku: number, kesto: number, ennen: number, jalkeen: number): number[] {
  const tunnit: number[] = []
  for (let i = alku - ennen; i < alku + kesto + jalkeen; i++) {
    tunnit.push(i)
  }
  return tunnit
}

function onkoMahdotonAsetus(ohjelma: Ohjelma, paiva: number, tunti: number): boolean {
  const mahdottomat = ohjelma.mahdoton.filter(mahdoton => mahdoton.paiva === paiva)
  const mahdottomatTunnit: number[] = []
  mahdottomat.forEach(mahdoton => mahdoton.tunnit.length > 0 ? mahdottomatTunnit.push(...mahdoton.tunnit.map(t => ajastaRaaka(paiva, tunti))) : mahdottomatTunnit.push(...Array(24).fill(0).map((k, i) => ajastaRaaka(paiva, (k + i)))))

  ohjelma.blokkaavatOhjelmat.forEach(bo => mahdottomatTunnit.push(...laskeOhjelmanBlokkitunnit(laskeAlkutuntiRaaka(bo.ohjelma), bo.ohjelma.kesto, bo.tuntejaEnnen, bo.tuntejaJalkeen)))

  return mahdottomatTunnit.some(mt => mt === ajastaRaaka(paiva, tunti))
}

function onkoHuono(ohjelma: Ohjelma, tunti: Tunti) {
  return !ohjelma.luokka.some(l => l === tunti.luokka)
}

interface OhjelmatAction {
  type: number,
  payload: OhjelmatPayload
}

interface OhjelmatPayload {
  paiva: number,
  tunti: number
}


const ohjelmatReducer = (state: Ohjelma[], action: OhjelmatAction) => {
  if (action.type > -1 && action.payload.paiva === -1) {
    state[action.type].paiva = -1;
    state[action.type].alku = 0;
  } else if (action.type > -1 && action.type < state.length) {
    state[action.type].paiva = action.payload.paiva;
    state[action.type].alku = action.payload.tunti;
  }
  return [ ...state ]
}

function mahtuukoOhjelma(ohjelma: Ohjelma, paiva: number, tunti: number, ohjelmat: Ohjelma[]): boolean {
  const ohjelmanTunnit = laskeTunnitAjallaRaaka(ohjelma.kesto, paiva, tunti)
  let mahtuuko = true
  const kaikkiTunnit: number[] = []
  ohjelmat.filter(o => o.nimi !== ohjelma.nimi).map(o =>laskeTunnitRaaka(o)).forEach(t => t.forEach(t2 => kaikkiTunnit.push(t2)))

  ohjelmanTunnit.forEach(ot => {
    if (kaikkiTunnit.findIndex(kt => kt === ot) > -1) {
      mahtuuko = false;
    }
  })
  return mahtuuko
}

function App() {

  const [ohjelmat, ohjelmatDispatch] = useReducer(ohjelmatReducer, ohjelmaLista)
  const [paivat, setPaivat] = useState<Paiva[]>(ohjelmaAika)
  const [valittuOhjelma, setValittuOhjelma] = useState(-1)

  useEffect(() =>{}, [ohjelmat, valittuOhjelma])

  function ohjelmaClick(ohjelma: Ohjelma, paiva: number, tunti: number) {
    setValittuOhjelma(ohjelmat.findIndex(o => o.nimi === ohjelma.nimi))
  }

  function tyhjaClick(paiva: number, tunti: number) {
    if (valittuOhjelma !== -1) {
      if (mahtuukoOhjelma(ohjelmat[valittuOhjelma], paiva, tunti, ohjelmat)) {
        ohjelmatDispatch({ type: valittuOhjelma, payload: {paiva, tunti: tunti}})
        setValittuOhjelma(-1)
      }
    }
  }

  function poistaOhjelmaClick() {
    if (valittuOhjelma !== -1) {
      ohjelmatDispatch({ type: valittuOhjelma, payload: {paiva: -1, tunti: 0}})
      setValittuOhjelma(-1)
    }
  }

  return (
    <div className="App">
      <div className="Paiva-lista">
        {paivat.map(paiva => {
          return (
            <div key={paiva.indeksi} className="Paiva">
              <div className="Paiva-nimi">
                {paiva.viikonpaiva + " " + paiva.paivamaara}
              </div>
              {paivanTunnit.map(tunti => {
                const ohjelmanIndeksi = ohjelmat.findIndex(ohjelma => laskeAlkutuntiRaaka(ohjelma) === ajastaRaaka(paiva.indeksi, tunti.aika) || (ajastaRaaka(paiva.indeksi, tunti.aika) > laskeAlkutuntiRaaka(ohjelma) && laskeLopputuntiRaaka(ohjelma)> ajastaRaaka(paiva.indeksi, tunti.aika) ))
                if (ohjelmanIndeksi > -1) {
                  if (onkoMahdoton(ohjelmat[ohjelmanIndeksi], paiva.indeksi, tunti.aika)) {
                    return <div key={tunti.aika} className={"tunti " + (valittuOhjelma !== -1 ? ohjelmat[ohjelmanIndeksi].nimi === ohjelmat[valittuOhjelma].nimi ? "mahdoton-ohjelma-valittu" : "mahdoton-ohjelma" : "mahdoton-ohjelma")} onClick={() => ohjelmaClick(ohjelmat[ohjelmanIndeksi], paiva.indeksi, tunti.aika)}>
                          {ohjelmat[ohjelmanIndeksi].nimi}
                          </div>
                  } else {
                    const luokkaNimi: string[] = []
                    if (ohjelmat[ohjelmanIndeksi].luokka.some(l => l === tunti.luokka)) {
                      luokkaNimi.push("kelpaava")
                    } else {
                      luokkaNimi.push("luokaton")
                    }
                    luokkaNimi.push("ohjelma")
                    if (valittuOhjelma !== -1) {
                      if (ohjelmat[ohjelmanIndeksi].nimi === ohjelmat[valittuOhjelma].nimi) {
                        luokkaNimi.push("valittu")
                      }
                    }
                    return <div key={tunti.aika} className={"tunti " + luokkaNimi.join("-")} onClick={() => ohjelmaClick(ohjelmat[ohjelmanIndeksi], paiva.indeksi, tunti.aika)}>
                    {ohjelmat[ohjelmanIndeksi].nimi}
                    </div>
                  }
                } else {
                  let luokkaNimi: string = "";
                  if (valittuOhjelma > -1) {
                    if (onkoMahdotonAsetus(ohjelmat[valittuOhjelma], paiva.indeksi, tunti.aika)) {
                      luokkaNimi = " ei-sovi";
                    } else if (onkoHuono(ohjelmat[valittuOhjelma], tunti)) {
                      luokkaNimi = " ei-mielellaan"
                    } else {
                      luokkaNimi = " sopii"
                    }
                  }
                  
                  return <div key={tunti.aika} className={"tunti" + luokkaNimi} onClick={() => tyhjaClick(paiva.indeksi, tunti.aika)}>{tunti.aika}</div>
                }
              })}
              </div>
          )
        })}
      </div>
      <div className="poista-ohjelma" onClick={() => poistaOhjelmaClick()}>Poista ohjelma</div>
      <div className="Ohjelma-kuvaus-lista-main">
        {ohjelmat.map((ohjelma, index) => {
          return <div key={index} className={"Ohjelma-kuvaus-main " + (index % 2 === 0 ? "parillinen" : "pariton")} onClick={() => setValittuOhjelma(index)}>
              <div className="Ohjelma-kuvaus-nimi">{ohjelma.nimi}</div>
              <div className="Ohjelma-kuvaus-kesto">Kesto: {ohjelma.kesto}</div>
              <div className={"Ohjelma-kuvaus-paiva " + (ohjelma.paiva > -1 ? "asetettu" : "puuttuu") + (index % 2 === 0 ? " asetus-parillinen" : " asetus-pariton") }>{ohjelma.paiva > -1 ? ("Päivä: " + ohjelma.paiva + " Klo. " + ohjelma.alku + " - " + (ohjelma.alku + ohjelma.kesto)) : "puuttuu"}</div>
            </div>
        })}
      </div>
      <div>
        {valittuOhjelma}
      </div>
    </div>
  );
}

export default App;
