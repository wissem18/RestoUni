import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FaceBookIcon from "@mui/icons-material/Facebook"
import { Box,  } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <FaceBookIcon />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
