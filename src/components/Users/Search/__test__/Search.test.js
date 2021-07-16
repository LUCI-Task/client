import React from "react";
import Search from "../index";
import { fireEvent, render } from "@testing-library/react";

it("searchbar renders without crash", () => {
  const { queryByTestId } = render(<Search />);
  const SearchInput = queryByTestId("search_input");
  expect(SearchInput).toBeTruthy();
});

describe("search bar input should change", () => {
  it("on change", () => {
    const { queryByTestId } = render(<Search />);
    const SearchInput = queryByTestId("search_input");
    fireEvent.change(SearchInput, { target: { value: "testing input value" } });
    expect(SearchInput.value).toBe("testing input value");
  });
});
