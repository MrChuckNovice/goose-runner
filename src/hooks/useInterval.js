import { useEffect, useRef} from "react";

export function useInterval(callback, delay) {
    const savedCallback = useRef();
    // save le dernier callback.
    useEffect(()=> {
        savedCallback.current = callback;
    }, [callback]);
    
    //on set up l'interval
    useEffect(() => {
    function tick() {
        savedCallback.current();
    }
    if (delay !== null){
        const id = setInterval(tick, delay);
        return () => {
            clearInterval(id);
        };
    }
  },[delay]);    
}