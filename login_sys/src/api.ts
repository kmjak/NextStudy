import { userType } from "./types"
export const regisger = async (data:userType):Promise<userType> => {
    const res = await fetch("http://localhost:3001/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const ret = res.json();
    return ret
}
export const getAllUsers = async ():Promise<userType[]> => {
    const res = await fetch("http://localhost:3001/users",{cache:"no-store",});
    const users = res.json();
    return users;
}