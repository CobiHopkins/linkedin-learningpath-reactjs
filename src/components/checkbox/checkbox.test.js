import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './checkbox';

test("Selecting the checkbox should change value of checked to true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/Not Checked/i);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})