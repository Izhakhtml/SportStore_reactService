import PantsCards from "./Pants-Cards.component";
import {PantsContext} from './PantsContext.component'
const Pants=()=>{
return(
<PantsContext>
   <h1>PANTS</h1>
   <PantsCards/>
</PantsContext>
)    
}
export default Pants