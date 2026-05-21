import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

function renderApp(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App routing', () => {
  it('renders Home page at /', () => {
    renderApp('/')
    expect(screen.getByText(/welcome to simple react app/i)).toBeInTheDocument()
  })

  it('renders About page at /about', () => {
    renderApp('/about')
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('renders 404 page for unknown route', () => {
    renderApp('/this-does-not-exist')
    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })
})
