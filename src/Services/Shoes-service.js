/**
 * 
 * @param {} 
 * @returns 
 */
export const GetData =()=>{
try {
    return  fetch('https://localhost:44337/api/Shoes')    
    .then(res=> res.json())
} catch (error) {
    return error   
}
}
