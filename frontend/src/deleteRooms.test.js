import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Delete from './Screens/DeleteRooms'
import { MemoryRouter, Route } from 'react-router-dom';



afterEach(() => {
    cleanup(); 
})
    test("delete rooms 1", () => {
        render(<MemoryRouter>
            <Delete />
        </MemoryRouter>)
    const screenElement = screen.getByText("Delete Rooms");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})

test("delete rooms 2", () => {
    render(<MemoryRouter>
        <Delete />
    </MemoryRouter>)
const screenElement = screen.queryByTestId("delete");
waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})