type Props={
    name:string,
    pass:string,
    email:string
}
export async function createUser({name,pass,email}:Props){
    const response=await fetch("https://backend-one-objective.onrender.com/createUser",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },body:JSON.stringify({name,pass,email})
    })
    const res=await response.json()
    return res
}
export async function login(email:string,pass:string){
    const response=await fetch("https://backend-one-objective.onrender.com/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify({email,pass})
      })
      const res=await response.json()
      return res
}