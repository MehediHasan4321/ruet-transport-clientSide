const { registerSchema } = require("@/schemas")
import bcrypt from 'bcryptjs'
import findUserByEmail from './findUserByEmail'


 const createAccount = async (value) => {
    const valideataData = registerSchema.safeParse(value)
    if (!valideataData.success) {
        return { error: 'Invalid Data!' }
    }
    const { name, email, password } = valideataData.data

    const hashedPassword = await bcrypt.hash(password,10)

    const bodyData = {
        name,
        email,
       password:hashedPassword,
        role: 'user',
        createAt: new Date(),
        updateAt: new Date()
    }

    const isAlreadyExist = await findUserByEmail(email)
   
    if(isAlreadyExist){
        return {error:'Email Already taken!'}
    }

    const res = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(bodyData)
    })

    const data = await res.json()

    if(data.insertedId){
        return {message:'User Created'}
    }

    return {error:'Something went wrong!'}

}

export default createAccount