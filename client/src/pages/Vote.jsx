import React from "react";
import Layout from "../components/Layout";
import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import VoteCard from "../components/VoteCard";
import VoteForm from "../components/VoteForm";

const Vote = (props) => {
  const Votes = [
    { id: 1, name: "name1", description: "decri1", options: ["choix1", "choix2", "choix3"] },
    { id: 2, name: "name2", description: "decri2", options: ["choix12", "choix22"] }
  ];
  const [showVoteform, setShowVoteform] = React.useState(false);
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
          {Votes.map((vote) => (
            <Card key={vote.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardContent>
                  <VoteCard name={vote.name} description={vote.description} options={vote.options} isUser={props.isUser} />
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
            {Votes.map((vote) => (
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
