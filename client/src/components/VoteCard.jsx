import React, { useState } from "react";
import "../styles/VoteCard.css";
import axios from "axios";
const VoteCard = ({ name, description, options, isUser ,voteId}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleVote = async() => {
        if (selectedOption) {
            try {
              const response = await axios.post(
                `http://localhost:3006/vote-student/9c28e0d5-e158-4d67-a9c4-0292a485a660/${voteId}`,
                { optionId: selectedOption },
                { headers: { 'Content-Type': 'application/json' } }
              );
      
              console.log('Vote submitted successfully:', response.data);
      
            } catch (error) {
              console.error('Failed to submit vote:', error);
            }
          } else {
            console.log('Please select an option before voting.');
          }
    };

    return (
        <div className="voting-card">
            <h2 className="voting-card-title">{name}</h2>
            <p className="voting-card-description">{description}</p>
            <div className="voting-card-options">
                {options&&options.map((option, index) => (
                    <label key={index} className="voting-card-option">
                        <input
                            type="checkbox"
                            name={`voting-option-${name}`}
                            value={option[0]}
                            checked={selectedOption === option[0]}
                            onChange={() => handleOptionChange(option[0])
                          }
                          disabled={!isUser}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="option-label">{option[1]}</span>
                    </label>
                ))}
            </div>
            <button className="voting-card-button" onClick={handleVote} disabled={isUser ? false : true}>
                Vote
            </button>
        </div>
    );
};

export default VoteCard;
