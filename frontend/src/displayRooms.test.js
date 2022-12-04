import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Display from './Screens/DisplayRooms'
import { MemoryRouter, Route } from 'react-router-dom';



afterEach(() => {
    cleanup(); 
})
    test("renders rooms 1", () => {
        render(<MemoryRouter>
            <Display />
        </MemoryRouter>)
    const screenElement = screen.getByText("Rooms");
    waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})

test("renders rooms 2", () => {
    render(<MemoryRouter>
        <Display />
    </MemoryRouter>)
const screenElement = screen.queryByTestId("refresh");
waitFor(() => expect(getByTestId(screenElement)).toBeInTheDocument());
})

