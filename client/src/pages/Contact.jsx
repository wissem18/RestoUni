import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import useResto from "../context/RestoContext";
import useUser from "../context/UserContext";
import axios from "axios";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = (props) => {
  const { myResto, setMyResto } = useResto();
  const { myUser, setMyUser } = useUser();
  const [RestaurantInfo, setRestaurantInfo] = React.useState([]);
  useEffect(() => {
    if (myResto) {
      setRestaurantInfo(myResto);
    }
    else if (myUser) {
      axios.get(`http://localhost:3006/restaurant/${myUser.restaurantId}`).then((response) => {
        setRestaurantInfo(response.data);
      });
    }
  },[myResto,myUser]);
  return (
    <Layout >
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>

      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> {RestaurantInfo.telephone}
                  (Phone)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> {RestaurantInfo.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> {RestaurantInfo.localisation}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
