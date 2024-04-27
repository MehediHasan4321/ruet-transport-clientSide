

const getAllBus = async () => {

    const res = await fetch('http://localhost:8000/transports/')
    const data =await res.json()
    return data

}

export default getAllBus