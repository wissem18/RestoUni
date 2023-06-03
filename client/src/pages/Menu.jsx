import React, { useEffect } from "react";
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

const Menu = () => {
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
  let fetchMenus = async () => {
    try {
      if (myUser) {
        await axios.get(`http://localhost:3006/student/Resto/${myUser.id}`).then(async (response) => {
          console.log(response.data);
          const resp = await axios.get(`http://localhost:3006/restaurant/${response.data[0].restaurantId}`);
          setMenus(resp.data.Menus);
        })
      }
      else if (myResto) {
        const response = await axios.get(`http://localhost:3006/restaurant/${myResto.id}`);
        setMenus(response.data.Menus);
      }
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };
  React.useEffect(() => {
    fetchMenus()
  }, []);


  const DeleteMenu = async (e, id) => {
    e.preventDefault();
    await axios.delete(`http://localhost:3006/menu/${id}`)
    fetchMenus();
  }

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
                              <strong>{menu.plat}</strong>
                            </p>
                          </div>
                          <div className="title">
                            <p className="title">
                              <strong>{menu.entrée}</strong>
                            </p>
                          </div>

                          <div className="title">
                            <p className="title">
                              <strong>{menu.dessert}</strong>
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
      </Box>) : (
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
                                  <strong> {menu.plat}</strong>
                                </p>


                              </div>
                              <div className="title">
                                <p className="title">
                                  <strong> {menu.entrée}</strong>
                                </p>
                              </div>
                              <div className="title">
                                <p className="title">
                                  <strong> {menu.dessert}</strong>
                                </p>
                              </div>
                              <p className="card-footer">
                                11:30 &nbsp; | &nbsp; 13:30
                              </p>
                              <button type="submit" class="btn btn_Menu" onClick={(e) => DeleteMenu(e, menu.id)} >Delete</button>
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
          {showMenuform && <MenuForm hide={handleMenuFormClose} fetchMenus={fetchMenus} />}
        </>
      )}

    </Layout>
  );
};

export default Menu;
