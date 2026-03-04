import {useState} from 'react'

function ShopPanel({title,price,image,desc,rating,setCartItems}){

    const [selectedAmount, setSelectedAmount] = useState(0)

    function handleAddToCart(){
        if(selectedAmount > 0){
            setCartItems(prev => [...prev, {title,price,selectedAmount}])
            setSelectedAmount(0)
        }
    }


    return(
        <div className="shopPanel">
            <h2>{title}</h2>
            <img src={image} alt=""></img>
            <p className="shopDesc">{desc}</p>
            <p>
                <span className="shopPrice">{price}$</span>
                <span className="shopRating">{rating}<i className="fa-regular fa-star"></i></span>
            </p>
            <div className="shopAmount">
                <button onClick={() => setSelectedAmount(prev => prev - 1)} disabled={selectedAmount === 0}>-</button>
                <span>{selectedAmount}</span>
                <button onClick={() => setSelectedAmount(prev => prev + 1)}>+</button>
            </div>
            <button
            onClick={handleAddToCart}
            >Add to cart</button>
                
            
        </div>
    )
}
export default ShopPanel;