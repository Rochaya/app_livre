import React, { useState } from 'react';
import HomePage from './components/homePage';
import SearchForm from './components/searchForm';
import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
          <div>
            <SearchForm searchTerm={searchTerm} onSearchChange={handleSearchChange} />  
            <HomePage searchTerm={searchTerm} />
          </div>
        </>
    );
};

export default App;
