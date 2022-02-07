export const GetPants = async()=>{
try {
     return await fetch('https://localhost:44337/api/Pants')
    .then(res=>res.json())   
} catch (error) {
    
}

}