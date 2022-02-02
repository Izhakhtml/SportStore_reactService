import react from "react";
import { MyProvider } from "./PantsContext.component";
const Pants=()=>{
    const Consumer= react.useContext(MyProvider)
return(
    <div>
        {
          Consumer.pants.map((item)=><li>{item.Company}</li>)
        }
    </div>
)    
}
export default Pants