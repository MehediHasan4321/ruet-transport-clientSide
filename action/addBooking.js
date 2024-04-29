'use server'

const addBooking = async(body,busId)=>{
    const res = await fetch(`http://localhost:8000/tickets/${busId}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(body)
    })
    const resposeBack = await res.json()

    return resposeBack
}

export default addBooking