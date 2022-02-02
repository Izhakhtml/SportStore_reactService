export const GetPants = async()=>{
 return await fetch('https://localhost:44337/api/Pants')
 .then(res=>res.json())   
}