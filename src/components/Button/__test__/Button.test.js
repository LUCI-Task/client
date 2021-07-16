import React from "react";
import Button from "../index";
import { fireEvent, render } from "@testing-library/react";

it("renders without crash", () => {
  const { queryByTestId } = render(<Button />);
  const btn = queryByTestId("custom_button");
  const cbp = queryByTestId("custom_button_span");
  expect(btn).toBeTruthy();
  expect(cbp).toBeTruthy();
});

// describe("button clicked",() => {
//     it("onClick",() => {
//         const { queryByTitle } = render(<Button />);
//         const btn = queryByTitle("custom_button");
//         expect(btn.innerHTML).toBe()
//         fireEvent.click(btn)

//     })
// })
