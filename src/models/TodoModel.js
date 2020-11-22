import * as EventManager from '../EventManager'
let todos = [];
let nextTodoId = 0;

export const getFilterState = function(){
    return filterState;
}

export const getVisibleTodos = function(){
    switch (filterState) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
    }    
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
let filterState = VisibilityFilters.SHOW_ALL;

export const addTodo = function(text){
    let todo = {id:nextTodoId++, text:text, completed:false}
    todos.push(todo);
    EventManager.emit("UpdateTodo", {});
}

export const toggleItemState = function(id){
    if(!todos[id])return;
    todos[id].completed = !todos[id].completed;
    EventManager.emit("UpdateTodo", {});
}

export const setFilterState = function(sts){
    filterState = sts;
    EventManager.emit("UpdateTodo",{})
}

