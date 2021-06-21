import { initNavigation, initRouting } from './navigation.js'

// Event-Listener: Event feuert, wenn DOM-Baum vollständig geladen ist
document.addEventListener('DOMContentLoaded', init);

function init() {
    initNavigation();
    initRouting();
}