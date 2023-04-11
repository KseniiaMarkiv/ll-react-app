import { render, screen } from "@testing-library/react";
import Main from './components/Reservations';



test('Renders the BookingForm heading', () => {
    render(<Main />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

