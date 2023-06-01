import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout";
import MenuForm from "../components/MenuForm";
import '../styles/Menu.css'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";

const Menu = (props) => {
  const [showMenuform, setShowMenuform] = React.useState(false);
  const handleMenu = () => {
    setShowMenuform(true);
  };

  const handleMenuFormClose = () => {
    setShowMenuform(false);
  };
  return (
    <Layout isConnected={props.isConnected}>
      {props.isUser ? (<Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardContent>
                <div className="card">
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                        <strong>Monday</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"><img src={menu.image} alt="" /></div>
                        <div className="circle" id="bottom"></div>
                      </div>
                      <div className="front-content">
                        <small className="badge">Pasta</small>
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>Spaguetti Bolognese</strong>
                            </p>


                          </div>
                          <p className="card-footer">
                            11:30 &nbsp; | &nbsp; 13:30
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>):(
        <>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {MenuList.map((menu) => (
              <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                <CardActionArea>
                  <CardContent>
                    <div className="card">
                      <div className="content">
                        <div className="back">
                          <div className="back-content">
                            <strong>Monday</strong>
                          </div>
                        </div>
                        <div className="front">
                          <div className="img">
                            <div className="circle"></div>
                            <div className="circle" id="right"><img src={menu.image} alt="" /></div>
                            <div className="circle" id="bottom"></div>
                          </div>
                          <div className="front-content">
                            <small className="badge">Pasta</small>
                            <div className="description">
                              <div className="title">
                                <p className="title">
                                  <strong>Spaguetti Bolognese</strong>
                                </p>


                              </div>
                              <p className="card-footer">
                                11:30 &nbsp; | &nbsp; 13:30
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
            <button type="submit" class="btn addMenu" onClick={handleMenu}>Add  menu</button>
            {showMenuform && <MenuForm hide={handleMenuFormClose} />}
          </>
      )}
      
    </Layout>
  );
};

export default Menu;
