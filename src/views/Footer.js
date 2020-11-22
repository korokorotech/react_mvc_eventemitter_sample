import React, { useEffect, useState } from 'react'
import Link from './Link'
import * as TodoController from '../controllers/TodoController'
import {getFilterState,VisibilityFilters} from '../models/TodoModel'
import { registerEvent, unregisterEvent } from '../EventManager';

function Footer(){
  const [filterState,setFilterState] = useState(VisibilityFilters.SHOW_ALL);

  //受信するイベントのリスト
  const eventMap = {
    "UpdateTodo":(msg)=>{
        setFilterState(getFilterState());
    }
  }

  useEffect(()=>{
    registerEvent(eventMap);     //初回のみ受信イベントの登録
    return (()=>{
      unregisterEvent(eventMap); //終了時解除
    })
  },[])

  return (
    <div>
      <span>Show: </span>
      <Link active={filterState===VisibilityFilters.SHOW_ALL} children={"All"} 
      onClick={()=>{TodoController.setFilterStateAll()}} />
      <Link active={filterState===VisibilityFilters.SHOW_ACTIVE} children={"Active"} 
      onClick={()=>{TodoController.setFilterStateActive()}} />
      <Link active={filterState===VisibilityFilters.SHOW_COMPLETED} children={"Completed"} 
      onClick={()=>{TodoController.setFilterStateCompleted()}} />
    </div>
  )
}

export default Footer
