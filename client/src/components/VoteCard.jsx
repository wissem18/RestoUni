import React, { useState, useEffect } from "react";
import "../styles/VoteCard.css";
import axios from "axios";
import useResto from "../context/RestoContext";
import useUser from "../context/UserContext";

const VoteCard = ({ name, description, options, voteId, fetchVotes }) => {
  const { myUser, setMyUser } = useUser();
  const { myResto, setMyResto } = useResto();
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = React.useState(false);
  const [stat, setStat] = React.useState({});
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleVote = async () => {
    if (selectedOption) {
      try {
        const response = await axios.post(
          `http://localhost:3006/vote-student/${myUser.id}/${voteId}`,
          { optionId: selectedOption },
          { headers: { 'Content-Type': 'application/json' } }
        );

        console.log('Vote submitted successfully:', response.data);
        setVoted(true);

      } catch (error) {
        console.error('Failed to submit vote:', error);
      }
    } else {
      console.log('Please select an option before voting.');
    }
  };
  const deleteVote = async (e, id) => {
    e.preventDefault();
    await axios.delete(`http://localhost:3006/vote/${id}`)
    fetchVotes();
  }
  const getStat = async (optionId) => {

    await axios.get(`http://localhost:3006/vote-student/stat/${voteId}/${optionId}`).then(
      async (response) => {
        const statKey = optionId;
        const statValue = response.data;
        await setStat((prevStat) => ({ ...prevStat, [statKey]: statValue }));
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }
  useEffect(() => {
    options.forEach((option) => {
      getStat(option[0]);
    });
  }, []);
  return (
    <div className="voting-card">
      {myUser ? (<>
        <h2 className="voting-card-title">{name}</h2>
        <p className="voting-card-description">{description}</p>
        <div className="voting-card-options">
          {options && options.map((option, index) => (
            <label key={index} className="voting-card-option">
              <input
                type="checkbox"
                name={`voting-option-${name}`}
                value={option[0]}
                checked={selectedOption === option[0]}
                onChange={() => handleOptionChange(option[0])
                }
                disabled={!myUser}
              />
              <span className="checkbox-custom"></span>
              <span className="option-label">{option[1]}</span>
            </label>
          ))}
        </div></>) : (
        <>
          <h2 className="voting-card-title">{name}</h2>
          <p className="voting-card-description">{description}</p>
          <div className="voting-card-options">
            {options && options.map((option, index) => (
              <label key={index} className="voting-card-option">
                <span className="option-label" >{option[1] } :</span>
                <span className="option-label " style={{ marginLeft: '1rem', color: "red" }}>{String(stat[option[0]])}</span>
                
              </label>
            ))}
          </div></>
      )}
      {myUser ? (<button className="voting-card-button" onClick={handleVote} disabled={voted} >
        Vote
      </button>) : (<button className="voting-card-button" onClick={(e) => deleteVote(e, voteId) } style={{backgroundColor:"red"}} >
        Delete
      </button>)}

    </div>
  );
};

export default VoteCard;
