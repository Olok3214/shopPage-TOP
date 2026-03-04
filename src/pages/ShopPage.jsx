import ShopPanel from "./ShopPanel";
import { useOutletContext } from "react-router";

function ShopPage(){
    const {storeItems, setCartItems} = useOutletContext()

    return(
        <>
            {storeItems.map(item => <ShopPanel 
                key={item.id}
                itemId = {item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                desc={item.description}
                rating={item.rating.rate}
                setCartItems={setCartItems}
            />)}
        </>
    )
}
export default ShopPage;