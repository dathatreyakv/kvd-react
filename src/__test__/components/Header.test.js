import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../../components/Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe('#Header Component', () => {
  let component;
  beforeEach(() => {
    component = <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
        </Provider>
      </BrowserRouter>
  });

  it('should load the Login Button', () => {
    render(component);
    const loginBtn = screen.getByRole("button", { name: "Login"});
    expect(loginBtn).toBeInTheDocument();
  })

  it('should load the Cart Link', () => {
    render(component);
    const cartLink = screen.getByText(/Cart/);
    expect(cartLink).toBeInTheDocument();
  })
  
  it('should change Login to Logout on button click', () => {
    render(component);
    const loginBtn = screen.getByRole("button", { name: "Login"});
    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout"});
    expect(logoutBtn).toBeInTheDocument();
  })
})
