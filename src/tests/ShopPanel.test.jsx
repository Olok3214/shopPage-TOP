import { vi , describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ShopPanel from "../pages/ShopPanel";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

//{title,price,image,desc,rating,setCartItems}


describe('ShopPanel compoment, mock funcions', () => {

    const testCart = []
    const setCartItems = vi.fn((newItem) => testCart.push(newItem))

    const testprops = {
        title: "Test item",
        price: 10,
        image: "null",
        desc: "Test desc",
        rating: 4,
        setCartItems: setCartItems
    }

    it('renders Shop Panel component with correct props', () => {
        render( <MemoryRouter>
                <ShopPanel title={testprops.title}
                price={testprops.price}
                image={testprops.image}
                desc={testprops.desc}
                rating={testprops.rating}
                setCartItems={testprops.setCartItems}
                />
            </MemoryRouter>)

        expect(screen.getByRole("heading", {name: "Test item"})).toBeInTheDocument()
    })
    it('addToCard button and plus button in the doument', () => {
        render( <MemoryRouter>
                <ShopPanel title={testprops.title}
                price={testprops.price}
                image={testprops.image}
                desc={testprops.desc}
                rating={testprops.rating}
                setCartItems={testprops.setCartItems}
                />
            </MemoryRouter>)

        const button = screen.getByRole('button', {name: "Add to cart"})
        const plusButton = screen.getByRole('button', {name: "+"})
        expect(button).toBeInTheDocument()
        expect(plusButton).toBeInTheDocument()
    })
    it('add to cart button adds items to cart', async () => {
        render( <MemoryRouter>
                <ShopPanel title={testprops.title}
                price={testprops.price}
                image={testprops.image}
                desc={testprops.desc}
                rating={testprops.rating}
                setCartItems={testprops.setCartItems}
                />
            </MemoryRouter>)

        const user = userEvent.setup()
        const button = screen.getByRole('button', {name: "Add to cart"})
        const plusButton = screen.getByRole('button', {name: "+"})

        await user.click(plusButton)
        await user.click(button)

        expect(testCart).toHaveLength(1)
        expect(setCartItems).toHaveBeenCalled()
    })
})




//test dispolay and funcuions 