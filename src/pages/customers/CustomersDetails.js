import { useParams } from "react-router-dom";

export function CustomersDetail(){
    const{id}=useParams();

    return(
        <>
            <h2>Customers Detail</h2>
            <p>My id is{id}</p>
        </>
    )
}