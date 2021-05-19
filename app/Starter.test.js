import React from "react";
import renderer from "react-test-renderer";
import AppText from "./components/AppText";
import AppCard from "./components/AppCard";
import AppIcon from "./components/AppIcon";
import AppTextInput from "./components/AppTextInput";

jest.mock("@expo/vector-icons");


test("AppText default fontsize will be 14", () => {
  const json = renderer.create(<AppText />).toJSON();
  expect(json.props.style[0].fontSize).toBe(14);
});

test("AppText default fontFamily not to be roboto", () => {
  const json = renderer.create(<AppText />).toJSON();
  expect(json.props.style[0].fontFamily).not.toBe("Roboto");
});

test("AppText default fontFamily will be Arial", () => {
  const json = renderer.create(<AppText />).toJSON();
  expect(json.props.style[0].fontFamily).toBe("Arial");
});

test("AppCard cards border radius will be 20", () => {
  const json = renderer.create(<AppCard />).toJSON();
  expect(json.props.style.borderRadius).toBe(20);
});

test("AppCard renders correctly with parsed values", () => {
  const tree = renderer
    .create(
      <AppCard
        name="Bob's Barbeque"
        city="Sydney"
        date="10/02/2021"
        category="BBQ"
        user="User01"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("AppIcon renders an icon correctly", () => {
  const tree1 = renderer
    .create(
      <AppIcon name="logout" size={50} iconCol="red" backgroundColor="blue" />
    )
    .toJSON();
  expect(tree1).toMatchSnapshot();
});

test("AppTextInput renders with an Icon Correctly", () => {
  const tree2 = renderer
    .create(
      <AppTextInput
        autoCaptilize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry={true}
      />
    )
    .toJSON();
  expect(tree2).toMatchSnapshot();
});
