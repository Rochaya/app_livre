import React from 'react';

const SearchForm = ({searchTerm , onSearchChange}) => {
    return (
        <div>
            <input type="search" value={searchTerm} onChange={onSearchChange} />
        </div>
    )
}

export default SearchForm;