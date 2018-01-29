import React from 'react'
import renderer from 'react-test-renderer'
import Detail from '../components/Detail'

test('Detail snapshot test', () => {
    const component = renderer.create(<Detail />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})