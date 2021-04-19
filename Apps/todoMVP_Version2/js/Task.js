/**
 * Generatorfunktion: fortlaufende ID erzeugen
 */
function* createID() {
    let currentId = 0;
    while (true) {
        currentId++;
        // restart ist der Wert vom Aufruf von next()
        // next(true) führt zum Restart (=Rücksetzen der ID auf Startwert)
        let restart = yield currentId;
        if (true === restart) {
            currentId = 0;
        }
    }
}

/**
 * Generator zum Erzeugen der fortlaufenden IDs
 */
let idCreator = createID();

/** Basisklasse mit ID */
class BaseObj {
    /**
     * Erzeugt ein Basisobjekt mit neuer ID
     */
    constructor() {
        this.id = idCreator.next().value;
    }
}

/**
 * Klasse für Aufgaben (Tasks)
 * @extends BaseObj
 */
export default class Task extends BaseObj {

    /**
     * Erweiteter Konstruktor für Task
     * @param {string} description 
     * @param {string} priority 
     */
    constructor(description, priority) {
        super();
        this.description = description;
        this.priority = priority;
        this.done = false;
    }

    /**
     * Statische Methode für die Objekterzeugung
     * @param {*} description 
     * @param {*} priority 
     * @returns 
     */
    static create(description, priority) {
        return new Task(description, priority);
    }

    /**
     * Methode zum Status wechseln 
     */
    toggleState() {
        this.done = !this.done;
    }
}