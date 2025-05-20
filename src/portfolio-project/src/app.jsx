import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home.page';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={HomePage} exact />
            {/* Add more routes here as needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;