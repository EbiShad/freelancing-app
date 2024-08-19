import { useEffect, useState } from "react";


export default function useLocalStorageState(key,initiallState){

    const [value, setValue] = useState(()=>{
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initiallState
    });

    
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
      },[value,key])

      return [value,setValue]
}