import React from 'react'
import renderer from 'react-test-renderer'
import ResultsList from '../components/ResultsList'

test('ResultsList snapshot test', () => {
    const component = renderer.create(<ResultsList />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

