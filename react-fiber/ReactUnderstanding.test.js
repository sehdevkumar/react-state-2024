let React
let ReactDOM

describe('ReactUnderstanding', () => {
  beforeEach(() => {
    jest.resetModules() // Reset modules to clear React state between tests
    React = require('react')
    ReactDOM = require('react-dom')
  })

  it('works', () => {
    const App = ({ logger }) => {
        const [text, setText] = React.useState('hello')
        
      const handleClick = () => {
        setText('hi')
        logger('before-setState', text)
        logger('after-setState', text)
    }
    
    React.useEffect(() => {
        logger('render', text)
      }, [text, logger])

      if (text === 'hello') {
        return (
          <div>
            <div>
              <button onClick={handleClick}>{text}</button>
            </div>
          </div>
        )
      } else {
        return <div>hello</div>
      }
    }

    const container = document.createElement('div')
    const logger = jest.fn()
    ReactDOM.render(<App logger={logger} />, container)

    // Find the button inside the rendered component
    const button = container.querySelector('button')

    // Simulate a click event on the button
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
   

    // Force Jest to update the component by flushing pending updates
    ReactDOM.flushSync(() => {})

    expect(container.innerHTML).toBe('<div>hello</div>')
    
    expect(logger.mock.calls).toEqual([
        ['before-setState', 'hello'],
        ['after-setState', 'hello'],
        ['render', 'hello'],
        ['render', 'hi'],
    ])
  })
})
