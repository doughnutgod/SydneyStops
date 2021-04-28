import React from "react";
import renderer from 'react-test-renderer';
import AppText from './components/AppText';
import AppCard from './components/AppCard';


test('AppText will render', () => {
    const json = renderer.create(<AppText />).toJSON();
    expect(json.props.style[0].fontSize).toBe(14);
});

test('AppText will render', () => {
    const json = renderer.create(<AppCard />).toJSON();
    expect(json.props.style.borderRadius).toBe(20);
});

test('AppText renders correctly', () => {
    const tree = renderer.create(<AppCard />).toJSON();
    expect(tree).toMatchSnapshot();
});