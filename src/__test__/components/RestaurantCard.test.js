import "@testing-library/jest-dom"
import { render } from "@testing-library/react";
import RestaurantCard from "../../components/RestaurantCard";
import MOCK_DATA from "../../__mocks__/RestaurantMockData.json";
describe('#RestaurantCard Component', () => {
  it('should render the restaurant card', () => {
    const { getByText } = render(<RestaurantCard data={MOCK_DATA}/>);
    expect(getByText(/Pizza Hut/i)).toBeInTheDocument();
    expect(getByText(/pizzas/i)).toBeInTheDocument();
    expect(getByText(/30-35 mins/i)).toBeInTheDocument();
    expect(getByText(/4.0/i)).toBeInTheDocument();
    expect(getByText(/350 for two/i)).toBeInTheDocument();
  })
 })