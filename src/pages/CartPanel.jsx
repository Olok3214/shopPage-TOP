
function CartPanel({itemId,title,price,selectedAmount, setCartItems}){

    function handleRemoveItem(){
        setCartItems(prevItems => prevItems.filter(item => item.itemId !== itemId))
    }

    return (
        <div className="cartPanel">
            <h2>{title}</h2>
            <p>
                Price: ${price} Amount: {selectedAmount}
            </p>
            <p>Total: ${(price * selectedAmount).toFixed(2)}</p>
            <button type="button" onClick={handleRemoveItem}> Remove </button>
        </div>
    )
}

export default CartPanel