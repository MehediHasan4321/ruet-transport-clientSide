'use server'

export const deleteBooking = async (bookingId) => {
    const res = await fetch(`http://localhost:8000/booking/${bookingId}`, {
        method: 'DELETE'
    })
    const data = await res.json()
    return data
}


export const addBooking = async (body, busId) => {
    const res = await fetch(`http://localhost:8000/tickets/${busId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const resposeBack = await res.json()

    return resposeBack
}


export const addToBookingTable = async (info) => {

    const res = await fetch(`http://localhost:8000/booking`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    const resposeBack = await res.json()

    return resposeBack
}



// export const bookedSeat = async (seatId, busId, busSeat) => {

//     const res = await fetch(`http://localhost:8000/tickets/${busId}`, {
//         method: "PATCH",
//         headers:{'content-type':'application/json'},
//         body: JSON.stringify({seatId,busSeat})
//     })

//     const data =await res.json()
//     return data
// }


