import ShopPanel from "./ShopPanel";
import { useOutletContext } from "react-router";

function ShopPage(){
    const {storeItems, setCartItems} = useOutletContext()

    return(
        <div className="shopPage">
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
        </div>
    )
}
export default ShopPage;