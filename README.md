# Rattoisa ohjelmakarttasuunnittelija
 POC of program planner for a amateur radio station
 Only in Finnish for now, sorry.

 Erittäin alkutekijöissään oleva pop-up radioaseman ohjelmakarttasuunnittelutyökalu.

 Katso esimerkki tiedostosta `Mockohjelmadata.ts.`

 Ohjelmille voi asettaa blokkaavat ohjelmat objektina `BlokkaavaOhjelmaRaaka` johon laitetaan blokkaavan ohjelman nimi
 ja paljonko väliä täytyy olla ennen sen alkamista ja loppumista.

 Ohjelmalle voi laittaa myös propsiin `mahdoton` listan `Aika`-objekteja joissa on päivä ja sen tunnit jotka eivät sovi.
 Jos `tunnit` on tyhjä array, se tulkitaan niin että päivän kaikki tunnit ovat mahdottomia.

 Propsissa `luokka` on lista stringeistä jotka kertovat onko ohjelma `Tunti`-objektin luokalle.

 `npm start` ja pitäisi käynnistyä.

 Ohjelmia voi klikkailla joko ruudun alalaidan listasta tai suoraan ohjelmakartasta.

 Vihreä tarkoittaa, että asia on kunnossa.

 Punainen tarkoittaa, että ohjelma ei voi olla siinä.

 Sininen tarkoittaa, että ohjelma teknisesti voi olla siinä, mutta on laitettu esim. iltaohjelma aamuun.
