import bcrypt from "bcrypt"
export const hashPassword = async (password)=>{
    const salt = 12
    const hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}

export const comparePassword= async(password,hashedPassword)=>{
        const isMatch = await bcrypt.compare(password,hashedPassword)
        return isMatch
}