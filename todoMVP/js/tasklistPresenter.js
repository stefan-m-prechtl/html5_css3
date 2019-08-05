"use strict";

class PresenterList
{
    constructor(view)
    {
        this.view = view;
        this.view.setPresenter(this);
        this.tasks = new Set();
    }
    
    // *****************************************************************
    // Event-Handler
    // *****************************************************************
    // 
    // Eventhandler für Document geladen
    viewLoaded()
    {
        this.view.loaded();
    }
    // Eventhandler für Button "Leeren"
    clearList()
    {
        this.view.clearTable();
    }
    // Eventhandler für Button "Aktualisieren"
    refreshList()
    {
        this.tasks.clear();
        this.tasks = this.loadTasks();
        this.view.showTasks(this.tasks);
    }
    
    // Eventhandler für Link "Alle"
    showAllList()
    {
       this.view.showTasks(this.tasks);
    }
    
    // Eventhandler für Link "Offen"
    showUndoneList()
    {
        let allTaskArray = [...this.tasks];
        let undoneTaskArray = allTaskArray.filter((t) => t.done === false);
        this.view.showTasks(new Set(undoneTaskArray));
    }
    
    // Eventhandler für Link "Erledigt"
    showDoneList()
    {
        let allTaskArray = [...this.tasks];
        let undoneTaskArray = allTaskArray.filter((t) => t.done === true);
        this.view.showTasks(new Set(undoneTaskArray));        
    }
    
    // *****************************************************************
    // GUI-unabhängige Methoden: Logik
    // *****************************************************************
    loadTasks()
    {
        let result = new Set();
        
        result.add(Task.create("JS Buch lesen","normal"));
        result.add(Task.create("Backup erstellen","hoch"));
        let task = Task.create("Französich lernen","hoch")
        task.done = true;
        
        result.add(task);
        
        for (var i = 0, max = 10; i < max; i++) 
        {
            result.add(Task.create("Task" +i, "normal"));
        }
        
        return result;
    }
    
}

