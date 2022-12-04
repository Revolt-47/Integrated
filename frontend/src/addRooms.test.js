import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Add from './Screens/AddRooms'
import { MemoryRouter, Route } from 'react-router-dom';



afterEach(() => {
    cleanup(); 
})
    test("add rooms 1", () => {
        render(<MemoryRouter>
            <Add />
        </MemoryRouter>)
    const screenElement = screen.getByText("Add Rooms");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})

test("add rooms 2", () => {
    render(<MemoryRouter>
        <Add />
    </MemoryRouter>)
const screenElement = screen.queryByTestId("add");
waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})