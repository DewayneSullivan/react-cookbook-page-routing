import{Routes,Route} from "react-router-dom";
import { CustomersDetail } from "./CustomersDetails";
import { CustomersList } from "./CustomersList";
export function Customers(){
    return(
        <>
        <h1>Customers</h1>
        <Routes>
             <Route path = "" element = {<CustomersList />} />
             <Route path=":id" element={<CustomersDetail/>} />

           </Routes>
        </>
     

    )
 
}