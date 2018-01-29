import React from 'react'
import renderer from 'react-test-renderer'
import Sidebar from '../components/Sidebar'

test('Sidebar snapshot test', () => {
    const component = renderer.create(<Sidebar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
