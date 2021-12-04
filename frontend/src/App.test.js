import { mount, shallow } from "enzyme";

import App from "./App";
import React from "react";

it("renders without crashing", () => {
    shallow(<App />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Buy Your Favourite Robot</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
