import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './index' 



it('increase btn', () => {

    render(<Counter />);

    const count = screen.getByText("0");
    const increaseBtn = screen.getByText("Artir");
    

    fireEvent.click(increaseBtn);
    //console.log("Count after click:", count.textContent);
    expect(count).toHaveTextContent("1");

});

it('decrease btn', () => {

    render(<Counter />);

    const count = screen.getByText("0");
   
    const decreaseBtn = screen.getByText("Azalt");

    fireEvent.click(decreaseBtn);
    //console.log("Count after click:", count.textContent);
    expect(count).toHaveTextContent("-1");

});
