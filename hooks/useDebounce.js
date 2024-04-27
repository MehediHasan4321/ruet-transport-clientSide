'use client'

const { useState, useEffect } = require("react")

const useDebounce = (value,delay)=>{
    const [debounce,setDebounce] = useState('')

    useEffect(()=>{
        const clearTime = setTimeout(()=>{setDebounce(value)},delay ||500)

        return ()=>{
            clearTimeout(clearTime)
        }

        
    },[value,delay])

    return debounce
}

export default useDebounce