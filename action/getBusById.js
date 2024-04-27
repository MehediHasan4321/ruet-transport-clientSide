const getBusById = async(id)=>{
    const res = await fetch(`http://localhost:8000/transports/${id}`)
    const data = await res.json()

    return data
}

export default getBusById