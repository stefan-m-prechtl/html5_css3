"use strict";

QUnit.test("Test für Klasse 'Task'", function (assert)
{
    let task = new Task("Bücher kaufen", "hoch");
    let id = task.id;
    let description = task.description;
    let priority = task.priority;
    let isDone = task.done;
    
    assert.equal(id,1, "Id ok");
    assert.ok(description === "Bücher kaufen", "Description ok");
    assert.ok(priority === "hoch", "Priority ok");
    assert.ok(isDone === false, "State ok");
    
    let task2 = Task.create("Bücher kaufen", "hoch");
    assert.ok(task.description === task2.description && task.priority === task2.priority,"Create-Methode ok");
    
});