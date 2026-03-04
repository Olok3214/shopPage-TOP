

//Header display component, includes links to pages and number of items in the cart

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "../Header";
import { MemoryRouter } from "react-router";
//import userEvent from "@testing-library/user-event";

const items = [
    {title: "item1", price: 10, selectedAmount: 2},
    {title: "item2", price: 20, selectedAmount: 1},
    {title: "item3", price: 30, selectedAmount: 1}
]

describe('Header component', () => {
    it('renders header component with corrent amount of items', () =>{
        render(
        <MemoryRouter>
           <Header items={items}/>
        </MemoryRouter>
        )
        expect(screen.getByRole("navigation")).toBeInTheDocument()
        expect(screen.getByText("4")).toBeInTheDocument()
    })
    it('renders header Links', () => {
        render(
        <MemoryRouter>
           <Header items={items}/>
        </MemoryRouter>
        )
        expect(screen.getByRole("link", {name: "Placeholder shop"})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: "Shop"})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: "Basket4"})).toBeInTheDocument()

    })
})