import { useOutletContext } from "react-router";
import CartPanel from './CartPanel'
import { useMemo } from "react";

function BasketPage(){
    const {cartItems , setCartItems} = useOutletContext()

    const total = useMemo(() => cartItems.reduce((sum, item) => sum + (item.price * item.selectedAmount), 0), [cartItems])


//title,price,selectedAmount, setCartItems
    return (<>
        <h1> Your Cart:</h1>
        {cartItems.map( item => <CartPanel 
            key = {item.itemId}
            itemId={item.itemId}
            price = {item.price}
            selectedAmount = {item.selectedAmount}
            setCartItems = {setCartItems}
        />
        )}
        <div className="cartTotal">
            Total: ${total.toFixed(2)}
            <button type="button">Check out</button>
        </div>
    </>)
}
export default BasketPage;