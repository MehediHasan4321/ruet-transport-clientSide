'use server'

const getAllUser = async () => {
    const res = await fetch('http://localhost:8000/users')
    const data = await res.json()
    return data
}

export default getAllUser