import axios from "axios";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const baseURL = "https://dummyjson.com/users?limit=40";

export default function App() {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [userData, setUserData] = React.useState(null);
    const [isLoading, setisLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            const UserObj = {
                currentUserId: 0,
                CUser: response.data.users[0]
            };
            setCurrentUser(UserObj);
            setUserData(response.data);
            console.log(response.data);
        

            
        });
        }, []);

    React.useEffect(() => {
        if (userData === null) {
            console.log("null value");
        }

        else {
            setTimeout(() => {
                setisLoading(false);
            }, 2000);
        }
    }, [userData])


    if (isLoading) {
        return (
            <>
                LOADING..
            </>
        )
    }
    else {
        return (
            <div className="container">
                <div className="App">
                    <h1 style={{ color: "black" }}>User Selection</h1>
                    <Card id="item1">
                        <Card.Body>
                            <label>FirstName : </label>
                            <span>{currentUser.CUser.firstName}</span>
                            <p>
                                <label>LastName : </label>{" "}
                                <span>{currentUser.CUser.lastName}</span>
                            </p>
                            <p>
                                <label>MaidenName : </label>
                                <span>{currentUser.CUser.maidenName}</span>
                            </p>
                            <p>
                                <label>Age : </label>
                                <span>{currentUser.CUser.age}</span>
                            </p>
                            <p>
                                <label>Phone :</label> <span>{currentUser.CUser.phone}</span>
                            </p>
                        </Card.Body>
                    </Card>
                    <div className="ButtonControls">
                        <Button variant="success" id="change" onClick={() => changeUser("next")}>
                            Next User
                        </Button>
                        <Button variant="success" id="change" onClick={() => changeUser("previous")}>
                            Previous User
                        </Button>
                    </div>
                </div>
            </div>
        )
    }


    function changeUser(changeAction) {
        const tempCurrentUser = currentUser.currentUserId +1
        
        if (
            changeAction === "next" && tempCurrentUser < userData.users.length 
        ) {
            const tempUser = {
                currentUserId: currentUser.currentUserId + 1,
                CUser: userData.users[currentUser.currentUserId + 1]
            };
            setCurrentUser(tempUser);
        } 
        else if (changeAction === "previous" && currentUser.currentUserId > 0) {
            const temp_User = {
                currentUserId: currentUser.currentUserId - 1,
                CUser: userData.users[currentUser.currentUserId - 1]
            };
            setCurrentUser(temp_User);            
        }
    }




}

