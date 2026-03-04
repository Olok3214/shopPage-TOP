import { useOutletContext } from "react-router";

function BasketPage(){
    const {cartItems , setCartItems} = useOutletContext()
    
    console.log(cartItems)

    return <h1> basket page</h1>
}
export default BasketPage;