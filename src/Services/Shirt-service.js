export const GetShirts = async ()=>{
try {
    return await fetch('https://localhost:44337/api/Shirts')
                .then((res)=>res.json())
} catch (error) {
    return error
}    
}