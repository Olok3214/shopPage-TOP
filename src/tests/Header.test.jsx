

//Header display component, includes links to pages and number of items in the cart

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Header from "../Header";
import { MemoryRouter } from "react-router";
//import userEvent from "@testing-library/user-event";


describe('Header component', () => {
    it('renders header component with corrent amount of items', () =>{
        render(
        <MemoryRouter>
           <Header items={3}/>
        </MemoryRouter>
        )
        expect(screen.getByRole("navigation")).toBeInTheDocument()
        expect(screen.getByText("3")).toBeInTheDocument()
    })
    it('renders header Links', () => {
        render(
        <MemoryRouter>
           <Header items={0}/>
        </MemoryRouter>
        )
        expect(screen.getByRole("link", {name: "Placeholder shop"})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: "Shop"})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: "Basket 0"})).toBeInTheDocument()

    })
})