'use server'

const addToBookingTable = async(info)=>{
    
    const res = await fetch(`http://localhost:8000/booking`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(info)
    })
    const resposeBack = await res.json()

    return resposeBack
}


export default addToBookingTable