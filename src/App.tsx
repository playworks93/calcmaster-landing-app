import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import HistoryComponent from './components/HistoryComponent'
import CollaborationComponent from './components/CollaborationComponent'
import ThemeSwitcherComponent from './components/ThemeSwitcherComponent'

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
          <p className="tagline">Your Smart Productivity Calculator</p>
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
          <li>User Authentication & Onboarding</li>
          <li>Basic Arithmetic Operations</li>
          <li>Advanced Calculations (e.g., Trigonometry, Logarithms)</li>
          <li>Collaborative Calculation Sessions</li>
          <li>AI-Powered Suggestions</li>
          <li>History of Calculations</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcMaster. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App