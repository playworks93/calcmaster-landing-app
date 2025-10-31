import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'basic_arithmetic_operations' ? 'active' : ''}
          onClick={() => setActiveTab('basic_arithmetic_operations')}
        >
          Basic Arithmetic Operations
        </button>
        <button 
          className={activeTab === 'advanced_functions_(e.g.,_trigonometry,_logarithms)' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_functions_(e.g.,_trigonometry,_logarithms)')}
        >
          Advanced Functions (E.G., Trigonometry, Logarithms)
        </button>
        <button 
          className={activeTab === 'history_log_of_calculations' ? 'active' : ''}
          onClick={() => setActiveTab('history_log_of_calculations')}
        >
          History Log Of Calculations
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'basic_arithmetic_operations' && (
          <div className="tab-content">
            <h2>Basic Arithmetic Operations</h2>
            <p>Manage your basic arithmetic operations here.</p>
          </div>
        )}

        {activeTab === 'advanced_functions_(e.g.,_trigonometry,_logarithms)' && (
          <div className="tab-content">
            <h2>Advanced Functions (e.g., Trigonometry, Logarithms)</h2>
            <p>Manage your advanced functions (e.g., trigonometry, logarithms) here.</p>
          </div>
        )}

        {activeTab === 'history_log_of_calculations' && (
          <div className="tab-content">
            <h2>History Log of Calculations</h2>
            <p>Manage your history log of calculations here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard