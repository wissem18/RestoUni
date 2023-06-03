import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import VoteCard from "../components/VoteCard";
import VoteForm from "../components/VoteForm";
import axios from "axios";
import useResto from "../context/RestoContext";
import useUser from "../context/UserContext";
const Vote = () => {
  const { myResto, setMyResto } = useResto();
  const { myUser, setMyUser } = useUser();
  const [votes, setVotes] = React.useState([]);
  const [showVoteform, setShowVoteform] = React.useState(false);
  const fetchVotes = async () => {
    try {
      let votesWithExtractedOptions;
      if (myUser) {
        await axios.get(`http://localhost:3006/student/Resto/${myUser.id}`).then(async (response) => {
          console.log(response.data);
          const resp = await axios.get(`http://localhost:3006/vote/${response.data[0].restaurantId}`);
          votesWithExtractedOptions = await resp.data.map((vote) => ({
            ...vote,
            options: vote.Options.map((option) => [option.id, option.description]),
          }));
        })
      }
      else if (myResto) {
        const response = await axios.get(`http://localhost:3006/vote/${myResto.id}`);
        votesWithExtractedOptions = await response.data.map((vote) => ({
          ...vote,
          options: vote.Options.map((option) => [option.id, option.description]),
        }));
      }
      setVotes(votesWithExtractedOptions);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
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
      {myUser ? (

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
                  <VoteCard name={vote.name} description={vote.description} options={vote.options} voteId={vote.id} />
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
                    <VoteCard name={vote.name} description={vote.description} options={vote.options} voteId={vote.id} fetchVotes={fetchVotes} />
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
          <button type="submit" className="btn addMenu" onClick={handleVote}>
            Add Vote
          </button>
            {showVoteform && <VoteForm hide={handleVoteFormClose} fetchVotes={fetchVotes} />}
        </>
      )}
    </Layout>
  );
};

export default Vote;
