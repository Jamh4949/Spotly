import { render, screen } from '@testing-library/react'
import Sidebar from '../Sidebar'

describe('Sidebar', () => {
  it('should render the sidebar component', () => {
    render(<Sidebar />)
    
    // Verificar que el componente se renderiza
    const sidebar = screen.getByRole('navigation')
    expect(sidebar).toBeInTheDocument()
  })

  it('should render the logo', () => {
    render(<Sidebar />)
    
    // Verificar que el logo está presente
    const logo = screen.getByAltText('Logo')
    expect(logo).toBeInTheDocument()
  })

  it('should render all navigation links', () => {
    render(<Sidebar />)
    
    // Verificar que todos los enlaces de navegación están presentes
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    expect(screen.getByText('Messages')).toBeInTheDocument()
    expect(screen.getByText('Bookmarks')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('More')).toBeInTheDocument()
  })

  it('should render the action button', () => {
    render(<Sidebar />)
    
    // Verificar que el botón está presente
    const button = screen.getByRole('button', { name: 'Post' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-[#F4AF01]')
  })

  it('should render user info section', () => {
    render(<Sidebar />)
    
    // Verificar que la sección de información del usuario está presente
    expect(screen.getByText('User Info')).toBeInTheDocument()
  })

  it('should have correct styling classes', () => {
    render(<Sidebar />)
    
    const sidebar = screen.getByRole('navigation')
    expect(sidebar).toHaveClass('h-screen')
    expect(sidebar).toHaveClass('hidden')
    expect(sidebar).toHaveClass('sm:flex')
  })
})
