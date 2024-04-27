import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App Component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
  it('should render the component properly', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World',
    )
  })
})
