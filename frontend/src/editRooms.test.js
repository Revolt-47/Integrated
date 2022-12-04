import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Edit from './Screens/EditRooms'
import { MemoryRouter, Route } from 'react-router-dom';



afterEach(() => {
    cleanup(); 
})
    test("renders rooms 1", () => {
        render(<MemoryRouter>
            <Edit />
        </MemoryRouter>)
    const screenElement = screen.getByText("Edit Rooms");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})

test("renders rooms 2", () => {
    render(<MemoryRouter>
        <Edit />
    </MemoryRouter>)
const screenElement = screen.queryByTestId("edit");
waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})