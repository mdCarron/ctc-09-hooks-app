import React from "react";
import HooksApp from "../HooksApp";
import { shallow } from "enzyme";

describe("<HooksApp />", () => {
  const wrapper = shallow(<HooksApp />);

  test("Should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
