'use server '


const getAllBookings = async ()=>{
    const res = await fetch('http://localhost:8000/booking')
    const data = await res.json()
    return data
}

export default getAllBookings