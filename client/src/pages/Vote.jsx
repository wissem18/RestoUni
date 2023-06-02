import React from "react";
import Layout from "../components/Layout";
import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import VoteCard from "../components/VoteCard";
import VoteForm from "../components/VoteForm";
import axios from "axios";
const Vote = (props) => {
 const [votes, setVotes] = React.useState([]);
  const [showVoteform, setShowVoteform] = React.useState(false);
  React.useEffect(() => {
  const fetchVotes = async () => {
    try {
      const response = await axios.get('http://localhost:3006/vote/eeb2ec84-d8fe-4505-9184-39c6e91ff092');
      const votesWithExtractedOptions = await response.data.map((vote) => ({
        ...vote,
        options: vote.Options.map((option) => [option.id, option.description]),
      }));
  
      setVotes(votesWithExtractedOptions);   
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchVotes();
}, []);
  const handleVote = () => {
    setShowVoteform(true);
  };

  const handleVoteFormClose = () => {
    setShowVoteform(false);
  };
  return (
    <Layout >
      {props.isUser ? (

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {votes.map((vote) => (
            <Card key={vote.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardContent> 
                  <VoteCard name={vote.name} description={vote.description} options={vote.options} isUser={props.isUser} voteId={vote.id} />
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {votes.map((vote) => (
              <Card key={vote.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                <CardActionArea>
                  <CardContent>
                    <VoteCard name={vote.name} description={vote.description} options={vote.options} isUser={props.isUser} />
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
          <button type="submit" className="btn addMenu" onClick={handleVote}>
            Add Vote
          </button>
          {showVoteform && <VoteForm hide={handleVoteFormClose} />}
        </>
      )}
    </Layout>
  );
};

export default Vote;
