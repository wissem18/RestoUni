import React from "react";
import axios from "axios";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout";
import MenuForm from "../components/MenuForm";
import '../styles/Menu.css'
import useResto from "../context/RestoContext";
import useUser from "../context/UserContext";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";

const Menu = (props) => {
  const { myResto, setMyResto } = useResto();
  const { myUser, setMyUser } = useUser();
  const [showMenuform, setShowMenuform] = React.useState(false);
  const [Menus, setMenus] = React.useState([]);
  const handleMenu = () => {
    setShowMenuform(true);
  };

  const handleMenuFormClose = () => {
    setShowMenuform(false);
  };

  React.useEffect(() => {
    const fetchMenus = async () => {
      try {
         const  response = await axios.get('http://localhost:3006/restaurant/e94caa58-d4af-4ac6-8779-253d426f7870');
        setMenus(response.data.Menus);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <Layout >
      {myUser ? (<Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Menus.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardContent>
                <div className="card">
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                        <strong>{menu.date}</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"><img src={menu.image} alt="" /></div>
                        <div className="circle" id="bottom"></div>
                      </div>
                      <div className="front-content">
                        <div className="description">
                          <div className="title">
                            <p className="title">
                              <strong>Plat: {menu.plat}</strong>
                            </p>
                          </div>
                          <div className="title">
                            <p className="title">
                              <strong>Entrée: {menu.entrée}</strong>
                            </p>
                          </div>
                          
                          <div className="title">
                            <p className="title">
                              <strong>Dessert: {menu.dessert}</strong>
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
            {Menus.map((menu) => (
              <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                <CardActionArea>
                  <CardContent>
                    <div className="card">
                      <div className="content">
                        <div className="back">
                          <div className="back-content">
                            <strong>{menu.date}</strong>
                          </div>
                        </div>
                        <div className="front">
                          <div className="img">
                            <div className="circle"></div>
                            <div className="circle" id="right"><img src={menu.image} alt="" /></div>
                            <div className="circle" id="bottom"></div>
                          </div>
                          <div className="front-content">
                              <div className="description">
                              <div className="title">
                                <p className="title">
                                  <strong>Plat: {menu.plat}</strong>
                                </p>


                              </div>
                              <div className="title">
                                <p className="title">
                                  <strong>Entrée: {menu.entrée}</strong>
                                </p>
                              </div>
                              <div className="title">
                                <p className="title">
                                  <strong>Dessert: {menu.dessert}</strong>
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
