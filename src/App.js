import { ContextProvider } from "./components/shoes/ContextProvider.component";
import { PantsContext } from "./components/pants/PantsContext.component";
import {ShirtContext} from './components/Shirts/ShirtContext.component'
import {SportEContext} from './components/sport_equipment/SportEContext.component'
import Shoes from "./components/shoes/Shoes.component";
import Pants from "./components/pants/Pants.component";
import Shirt from "./components/Shirts/Shirt.component";
import SportE from "./components/sport_equipment/SportE.component";
function App() {
return(
    <SportEContext>
        <SportE/>
    </SportEContext>
  );
}

export default App;
