'use strict';

let bnt = document.querySelector("button");
bnt.addEventListener('click', codeBreaker);

function codeBreaker() {

    let zahl1 = Math.round(Math.random() * 9 + 0.5);
    let zahl2 = Math.round(Math.random() * 9 + 0.5);
    let zahl3 = Math.round(Math.random() * 9 + 0.5);

    let cntTipps = 0;
    let erraten = false;

    do {

        let meinTipp = prompt('Gib deinen Tipp ein', 'Zahl von 111 bis 999');
        let tipp1 = meinTipp.charAt(0);
        let tipp2 = meinTipp.charAt(1);
        let tipp3 = meinTipp.charAt(2);

        let cntRichtigeStelle = 0;
        let cntRichtigeZiffer = 0;

        if (tipp1 == zahl1) {
            cntRichtigeStelle++
        } else if (tipp1 == zahl2 || tipp1 == zahl3) {
            cntRichtigeZiffer++;
        }

        if (tipp2 == zahl2) {
            cntRichtigeStelle++
        } else if (tipp2 == zahl1 || tipp2 == zahl3) {
            cntRichtigeZiffer++;
        }

        if (tipp3 == zahl3) {
            cntRichtigeStelle++
        } else if (tipp3 == zahl1 || tipp3 == zahl2) {
            cntRichtigeZiffer++;
        }

        ausgabetipp(meinTipp, cntRichtigeStelle, cntRichtigeZiffer);

        erraten = (cntRichtigeStelle == 3);
        cntTipps++;

    } while (!erraten && cntTipps < 12)

    if (!erraten) {
        ausgabe('Code war: ' + zahl1 + zahl2 + zahl3);
    } else {
        ausgabe('Erraten! Spitze!');
    }

}

function ausgabetipp(tipp, cntRichtigeStelle, cntRichtigeZiffer) {

    let msg = 'Dein Tipp war: ' + tipp + '. Ergebnis: richtige Stellen: ' + cntRichtigeStelle + ' und richtige Ziffern: ' + cntRichtigeZiffer;

    ausgabe(msg);

}

function ausgabe(msg) {

    let absatz = document.createElement('p');
    let text = document.createTextNode(msg);
    absatz.appendChild(text);

    document.querySelector('#ausgabe').appendChild(absatz);
}