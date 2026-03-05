import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import CartPanel from "../pages/CartPanel";
import { vi , describe, it, expect } from "vitest";

//{itemId,title,price,selectedAmount, setCartItems}


describe('Cart panel tests', () => { 

    const mockDelete = vi.fn()

    const testData = {
        itemId : 1,
        title: 'Test title',
        price: 67,
        selectedAmount: 12,  
        setCartItems : mockDelete

    }

    it('renders Shop Cart component with correct props, delete funcion is not called when rendering', () => {
        render(<MemoryRouter>
            <CartPanel 
                itemId={testData.itemId} 
                title={testData.title} 
                price={testData.price} 
                selectedAmount={testData.selectedAmount}
                setCartItems={testData.setCartItems}/>
        </MemoryRouter>)

        expect(screen.getByRole("heading", {name: "Test title"})).toBeInTheDocument()
        
    })
    it('Remove item funcion is called', async() =>{
        render(<MemoryRouter>
            <CartPanel 
                itemId={testData.itemId} 
                title={testData.title} 
                price={testData.price} 
                selectedAmount={testData.selectedAmount}
                setCartItems={testData.setCartItems}/>
        </MemoryRouter>)
        const user = userEvent.setup()

        expect(mockDelete).not.toHaveBeenCalled()
        await user.click(screen.getByRole('button', {name: 'Remove'}))
        expect(mockDelete).toHaveBeenCalled()
    })
 })