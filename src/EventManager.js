import EventEmitter from "events";

const emitter = new EventEmitter();

export const registerEvent = function( eventMap ){
    for( let key in eventMap){
        emitter.on(key,eventMap[key]);
    }
}

export const unregisterEvent = function( eventMap ){
    for( let key in eventMap){
        emitter.off(key,eventMap[key]);
    }
}

export const emit = function (event, param){
    emitter.emit(event, param);
}
