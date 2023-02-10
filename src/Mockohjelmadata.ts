import { OhjelmaRaaka } from "./interfacet"

export const ohjelmadataLyhyt: OhjelmaRaaka[] = [
    {
        nimi: "Hupailuohjelma",
        kesto: [4],
        luokka: [ "päivä", "iltapäivä", "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Jarrujen iltapäivä1",
        kesto: [2],
        luokka: [ "iltapäivä", "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    }  
]

export const ohjelmadata: OhjelmaRaaka[] = [
    { 
        nimi: "Eurodance-yö",
        kesto: [8],
        luokka: [ "yö" ],
        mahdoton: [ { paiva: 1, tunnit: []}, { paiva: 2, tunnit: []}, { paiva: 3, tunnit: []}, { paiva: 4, tunnit: []}, { paiva: 5, tunnit: []}, { paiva: 8, tunnit: []}, { paiva: 9, tunnit: []}, { paiva: 10, tunnit: []}, { paiva: 11, tunnit: []}, { paiva: 12, tunnit: []} ],
        blokkaavatOhjelmatRaaka: [], 
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Hupailuohjelma",
        kesto: [3, 4, 5, 6],
        luokka: [ "päivä", "iltapäivä", "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Jarrujen iltapäivä1",
        kesto: [2, 3],
        luokka: [ "iltapäivä", "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Jarrujen iltapäivä2",
        kesto: [2, 3],
        luokka: [ "iltapäivä", "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Liian spesifinen erikoisohjelma",
        kesto: [2],
        luokka: [ "iltapäivä", "ilta"],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Elokuvaohjelma",
        kesto: [2],
        luokka: [ "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Yöllinen katastrofiohjelma",
        kesto: [8],
        luokka: [ "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Biletysohjelma",
        kesto: [4],
        luokka: [ "ilta" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Omituinen aamu",
        kesto: [2],
        luokka: [ "aamu", "aamupäivä" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ { nimi: "Eurodance-yö", ennen: 12, jalkeen: 12} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Liian vakava ohjelma",
        kesto: [4],
        luokka: [ "ilta" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Lastenlauluohjelma",
        kesto: [2],
        luokka: [ "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Kammottavan musiikin yö",
        kesto: [8],
        luokka: [ "yö" ],
        mahdoton: [ { paiva: 2, tunnit: [] }, { paiva: 3, tunnit: [] }, { paiva: 4, tunnit: [] }, { paiva: 5, tunnit: [] }, { paiva: 6, tunnit: [] }, { paiva: 7, tunnit: [] } ],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Vahvaa julistusta",
        kesto: [8],
        luokka: [ "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Menetetyt vuosikymmenet1",
        kesto: [2],
        luokka: [ "aamu", "aamupäivä", "päivä", "iltapäivä", "ilta", "yö" ],
        mahdoton: [ { paiva: 5, tunnit: [] }, { paiva: 6, tunnit: [] }, { paiva: 7, tunnit: [] }, { paiva: 8, tunnit: [] } ],
        blokkaavatOhjelmatRaaka: [ {nimi: "Yöllinen katastrofiohjelma", ennen: 24, jalkeen: 16} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Menetetyt vuosikymmenet2",
        kesto: [2],
        luokka: [ "aamu", "aamupäivä", "päivä", "iltapäivä", "ilta", "yö" ],
        mahdoton: [ { paiva: 5, tunnit: [] }, { paiva: 6, tunnit: [] }, { paiva: 7, tunnit: [] }, { paiva: 8, tunnit: [] } ],
        blokkaavatOhjelmatRaaka: [ {nimi: "Yöllinen katastrofiohjelma", ennen: 24, jalkeen: 16} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Epäilyttävää asiaa",
        kesto: [2],
        luokka: [ "aamu", "ilta" ],
        mahdoton: [ { paiva: 5, tunnit: [] }, { paiva: 6, tunnit: [] }, { paiva: 7, tunnit: [] }, { paiva: 8, tunnit: [] } ],
        blokkaavatOhjelmatRaaka: [ {nimi: "Yöllinen katastrofiohjelma", ennen: 24, jalkeen: 16} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Aamukahvi Show1",
        kesto: [2],
        luokka: [ "aamu", "aamupäivä"],
        mahdoton: [ { paiva: 5, tunnit: [] }, { paiva: 6, tunnit: [] }, { paiva: 7, tunnit: [] }, { paiva: 8, tunnit: [] } ],
        blokkaavatOhjelmatRaaka: [ {nimi: "Yöllinen katastrofiohjelma", ennen: 24, jalkeen: 16} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Aamukahvi Show2",
        kesto: [2],
        luokka: [ "aamu", "aamupäivä"],
        mahdoton: [ { paiva: 5, tunnit: [] }, { paiva: 6, tunnit: [] }, { paiva: 7, tunnit: [] }, { paiva: 8, tunnit: [] } ],
        blokkaavatOhjelmatRaaka: [ {nimi: "Yöllinen katastrofiohjelma", ennen: 24, jalkeen: 16} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Metalliradio",
        kesto: [4],
        luokka: [  "päivä", "iltapäivä", "ilta" ],
        mahdoton: [ { paiva: 5, tunnit: [] }, { paiva: 6, tunnit: [] }, { paiva: 7, tunnit: [] }, { paiva: 8, tunnit: [] } ],
        blokkaavatOhjelmatRaaka: [ {nimi: "Yöllinen katastrofiohjelma", ennen: 24, jalkeen: 16} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "DJ-ohjelma",
        kesto: [2],
        luokka: [ "ilta" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [ {nimi: "Yöllinen katastrofiohjelma", ennen: 24, jalkeen: 16} ],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Ufot, uskonto ja paholainen",
        kesto: [4],
        luokka: [ "iltapäivä", "ilta", "yö" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Spesifinen harrasteohjelma",
        kesto: [2],
        luokka: [ "aamu", "aamupäivä", "päivä" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },
    {
        nimi: "Nimee ei keksitty",
        kesto: [2],
        luokka: [ "päivä", "iltapäivä" ],
        mahdoton: [],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },    
    {
        nimi: "Toivemusaohjelma part XX",
        kesto: [2],
        luokka: [ "aamu", "iltapäivä", "ilta" ],
        mahdoton: [ {paiva: 4, tunnit: [ 19, 20, 21, 22, 23]} ],
        blokkaavatOhjelmatRaaka: [],
        paiva: -1,
        alku: 0
    },
]