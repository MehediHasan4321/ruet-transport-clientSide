const getSeatsByBusId = async (id) => {
    console.log(id)
    const res = await fetch(`http://localhost:8000/seats/${id}`)
    const data = await res.json()

    return data
}

export default getSeatsByBusId