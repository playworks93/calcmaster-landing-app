import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import CalculatorButton from './components/CalculatorButton'
import HistoryLog from './components/HistoryLog'
import SessionManager from './components/SessionManager'
import ThemeSelector from './components/ThemeSelector'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>CalcMaster</h1>
          <p className="tagline">Effortless Calculations, Endless Possibilities</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Basic Arithmetic Operations</li>
          <li>Advanced Functions (e.g., Trigonometry, Logarithms)</li>
          <li>History Log of Calculations</li>
          <li>Collaborative Calculation Sessions</li>
          <li>Customizable Interface Themes</li>
          <li>Voice Input for Calculations</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcMaster. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App