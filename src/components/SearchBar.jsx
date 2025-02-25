import React, { useState } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPaperPlane, faImage } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            console.log('Searching for:', query);
            // Add your search logic here
            setQuery('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleMicrophoneClick = () => {
        console.log('Microphone activated (Future voice input feature)');
        // Future voice input logic goes here
    };

    const handleImageClick = () => {
        console.log('Image upload feature (Coming soon!)');
        // Future image upload logic goes here
    };

    return (
        <div className="search-bar-container">
            <FontAwesomeIcon
                icon={faImage}
                className="icon"
                onClick={handleImageClick}
            />

            <FontAwesomeIcon
                icon={faMicrophone}
                className="icon"
                onClick={handleMicrophoneClick}
            />

            <input
                type="text"
                placeholder="Type your message..."
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <FontAwesomeIcon
                icon={faPaperPlane}
                className="icon"
                onClick={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
