import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock del componente Sidebar para aislar el test
jest.mock('@/components/Sidebar', () => {
  return function MockSidebar() {
    return <nav data-testid="sidebar">Sidebar Mock</nav>
  }
})

describe('Home Page', () => {
  it('should render the home page', () => {
    render(<Home />)
    
    // Verificar que la página se renderiza
    const mainContainer = screen.getByText('Sidebar Mock').parentElement
    expect(mainContainer).toBeInTheDocument()
  })

  it('should render the Sidebar component', () => {
    render(<Home />)
    
    // Verificar que el Sidebar está presente
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  it('should have the correct container styling', () => {
    const { container } = render(<Home />)
    
    // Verificar que el contenedor principal tiene las clases correctas
    const mainDiv = container.querySelector('.min-h-screen')
    expect(mainDiv).toBeInTheDocument()
    expect(mainDiv).toHaveClass('border-2')
    expect(mainDiv).toHaveClass('border-black')
    expect(mainDiv).toHaveClass('max-w-[1400px]')
    expect(mainDiv).toHaveClass('mx-auto')
  })
})
