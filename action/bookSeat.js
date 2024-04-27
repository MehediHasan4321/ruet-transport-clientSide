

const bookedSeat = async (seatId, busId, busSeat) => {
        
    const res = await fetch(`http://localhost:8000/tickets/${busId}`, {
        method: "PATCH",
        headers:{'content-type':'application/json'},
        body: JSON.stringify({seatId,busSeat})
    })

    const data =await res.json()
    return data
}


export default bookedSeat