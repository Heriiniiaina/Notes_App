import {createHmac} from "crypto"

export const hashCode = (value,key)=>{
    const hashedCode = createHmac("sha256",key).update(value).digest("hex")
    return hashedCode
}