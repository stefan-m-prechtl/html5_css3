"use strict";

function main() {

    let mannschaft = ['Xaver', 'Hans', 'Darth', 'Helge', 'Bärbel', 'Andrea'];
    let gegner = ['Hotte', 'Alois', 'Alva', 'Mikail', 'Chen Lu', 'Peter'];

    document.getElementById('eingabe').innerHTML += mannschaft;
    let ergebnis = sort(mannschaft);


}

function sort(liste) {
    //return sortViaBubble(liste);
    return sortViaBubble2(liste, 0, false);
}



function sortViaBubble2(liste, startIdx, changedPosition) {
    for (let i = startIdx; i < liste.length - 1; i++) {

        if (liste[i] > liste[i + 1]) {
            let remember = liste[i];
            liste[i] = liste[i + 1];
            liste[i + 1] = remember;

            changedPosition = true;

            document.getElementById('zwischenausgabe').innerHTML += "<br>" + liste;
            setTimeout(sortViaBubble2, 500, liste, i, changedPosition)
            return;

        }
    }
    // Gab es keine Änderung? --> Liste sortiert!
    if (!changedPosition) {
        document.getElementById('endausgabe').innerHTML += liste;
    } else {
        // nochmals sortieren!
        setTimeout(sortViaBubble2, 1000, liste, 0, false);
    }

}

function sortViaBubble(liste) {


    do {
        var changedPosition = false;

        for (let i = 0; i < liste.length - 1; i++) {

            if (liste[i] > liste[i + 1]) {
                let remember = liste[i];
                liste[i] = liste[i + 1];
                liste[i + 1] = remember;

                changedPosition = true;

                document.getElementById('zwischenausgabe').innerHTML += "<br>" + liste;
            }

        }
    }
    while (changedPosition)

    return liste;

}

main();

