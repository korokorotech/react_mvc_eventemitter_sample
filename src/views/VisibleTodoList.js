import {getVisibleTodos} from '../models/TodoModel'
import {toggleItemState} from '../controllers/TodoController'
import Todo from './Todo'
import { useEffect, useState } from 'react';
import { registerEvent, unregisterEvent } from '../EventManager';

function VisibleTodoList() {
  const [todos,setTodos] = useState(getVisibleTodos());

  //受信するイベントのリスト
  const eventMap = {
    "UpdateTodo":(msg)=>{
      const todo_list = getVisibleTodos();
      setTodos(todo_list.slice());   //リストsetしても常に変更された扱いにならないのでsliceする
    }
  }

  //初回と終了時のみの処理を書く
  useEffect(()=>{
    registerEvent(eventMap);     //初回のみ受信イベントの登録
    return ()=>{
      unregisterEvent(eventMap); //終了時解除
    }
  },[])

  return (
    <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleItemState(todo.id)}
          />
        )}
    </ul>
  )
}

export default VisibleTodoList;