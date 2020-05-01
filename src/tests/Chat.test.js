import React from 'react';
import { Chat } from '../Components/Chat';
import renderer from 'react-test-renderer';

test('Chat snapshot test', () => {
    const component = renderer.create(
        <Chat />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
