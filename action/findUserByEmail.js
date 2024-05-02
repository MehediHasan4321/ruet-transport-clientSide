
const findUserByEmail = async(email)=>{
    const res = await fetch(`http://localhost:8000/users/e/${email}`)
    const data = await res.json()
    return data
}

export default findUserByEmail