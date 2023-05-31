import React from "react";
import Layout from "../components/Layout";
import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import VoteCard from "../components/VoteCard";

const Vote = () => {
  const Votes = [
    { id: 1, name: "name1", description: "decri1", options: ["choix1", "choix2", "choix3"] },
    { id: 2, name: "name2", description: "decri2", options: ["choix12", "choix22"] }
  ];

  return (
    <Layout>
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
                <VoteCard name={vote.name} description={vote.description} options={vote.options} />
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Vote;
