import * as TodoModel from '../models/TodoModel'

export const addTodo = function(text){
    TodoModel.addTodo(text);
}

export const toggleItemState = function(id){
    TodoModel.toggleItemState(id);
}

export const setFilterStateAll = function(){
    TodoModel.setFilterState(TodoModel.VisibilityFilters.SHOW_ALL);    
}

export const setFilterStateActive = function(){
    TodoModel.setFilterState(TodoModel.VisibilityFilters.SHOW_ACTIVE);
}

export const setFilterStateCompleted = function(){
    TodoModel.setFilterState(TodoModel.VisibilityFilters.SHOW_COMPLETED);
}
