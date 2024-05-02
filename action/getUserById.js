'use server'

const getUserById = async(id)=>{
    const res = await fetch(`http://localhost:8000/users/i/${id}`)
    const data = res.json()

    return data
}

export default getUserById