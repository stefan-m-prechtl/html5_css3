"use strict";

// Fortlaufende ID erzeugen
function *createID()
{
    let currentId = 0;
    while (true)
    {
        currentId++;
        // restart ist der Wert vom Aufruf von next()
        // next(true) führt zum Restart (=Rücksetzen der ID aus Startwert)
        let restart = yield currentId;
        if (true === restart)
        {
            currentID = 0;
        }
    }
}

let idCreator = createID();


class BaseObj
{
    constructor()
    {
        this.id = idCreator.next().value;
    }
}

class Task extends BaseObj
{
    // Erweiterter Konstruktor
    constructor(description, priority)
    {
        super();
        this.description = description;
        this.priority = priority;
        this.done = false;
    }

    // Statische Methode für die Objekterzeugung
    static create(description, priority)
    {
        return new Task(description, priority);
    }
}


