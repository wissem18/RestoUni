import React, { useState } from "react";
import "../styles/VoteCard.css";

const VoteCard = ({ name, description, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleVote = () => {
        if (selectedOption) {
            console.log(`Voted for option: ${selectedOption}`);
        } else {
            console.log("Please select an option before voting.");
        }
    };

    return (
        <div className="voting-card">
            <h2 className="voting-card-title">{name}</h2>
            <p className="voting-card-description">{description}</p>
            <div className="voting-card-options">
                {options.map((option, index) => (
                    <label key={index} className="voting-card-option">
                        <input
                            type="checkbox"
                            name={`voting-option-${name}`}
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="option-label">{option}</span>
                    </label>
                ))}
            </div>
            <button className="voting-card-button" onClick={handleVote}>
                Vote
            </button>
        </div>
    );
};

export default VoteCard;
