export const GetSportE = async ()=>{
try {
return await fetch('https://localhost:44337/api/SportE')
   .then(res=>res.json())   
} catch (error) {
    return console.error(error)
}
}