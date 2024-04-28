'use server'

export const addBus = async(value)=>{
    const res = await await fetch('http://localhost:8000/transports',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(value)
    })
    const data = await res.json()

    return data
}