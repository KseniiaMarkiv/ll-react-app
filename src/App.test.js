import { render, screen } from "@testing-library/react";
import { create } from "react-test-renderer";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Menu from "./components/Menu";
import BookingPage from "./components/Reservations";
import Specials from "./components/Specials";
import Login from "./components/Login";
import ConfirmedBooking from "./components/ConfirmedBooking";

describe("App routes", () => {
  it("renders correctly Main route", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders correctly About route", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/#about"]}>
        <Routes>
          <Route path="/#about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders correctly Menu route", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/menu"]}>
        <Routes>
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders correctly BookingPage route", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/reservations"]}>
        <Routes>
          <Route path="/reservations" element={<BookingPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders correctly Specials route", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/#specials"]}>
        <Routes>
          <Route path="/#specials" element={<Specials />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders correctly Login route", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it("renders correctly ConfirmedBooking route", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <Routes>
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});



test('Renders the BookingForm heading', () => {
    render(<About />);
    const headingElement = screen.getByText("Chicago");
    expect(headingElement).toBeInTheDocument();
})

