import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import BookingPage from './Reservations';



test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

