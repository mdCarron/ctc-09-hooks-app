import React from "react";
import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("<MultipleCustomHooks />", () => {
  useCounter.mockReturnValue({
    counter: 100,
    increment: () => {},
  });

  test("should match snapshot", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should fetch and show information", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Sopita",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find(".blockquote-footer").text().trim()).toBe("Sopita");
  });
});
