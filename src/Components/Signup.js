import "./Page.css";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import styled from "styled-components";
import logo from "/Users/ronald/development/Phase-5/book-now-frontend/src/Logo 3 copy 2.PNG";

function Signup({ setCurrentUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        username,
        password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/");
        });
      } else {
        res.json().then((error) => {
          setErrors(error);
        });
      }
    });
  };

  return (
    <Container>
      <Box
        className="login-Box"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Form onSubmit={handleSubmit}>
          <LogoWrapper>
            <center>
              <img src={logo} alt="" />
            </center>
            <h3>
              Treehouse <span>Studios</span>
            </h3>
          </LogoWrapper>
          <h3> Register </h3>
          <p>
            {error ? (
              <>
                {error.errors.map((error) => (
                  <Alert
                    key={error.id}
                    variant="outlined"
                    severity="error"
                    style={{ color: "red" }}
                  >
                    {error}
                  </Alert>
                ))}
              </>
            ) : (
              <></>
            )}
          </p>

          <TextField
            required
            id="standard-required"
            label="Email"
            defaultValue="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            required
            id="standard-required"
            label="Full Name"
            defaultValue="full name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            required
            id="standard-required"
            label="Username"
            defaultValue="username"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
            type="submit"
          >
            <AssignmentIcon>Register</AssignmentIcon>
            <Typography variant="button" display="block">
              Signup
            </Typography>
          </Fab>

          <h4>
            Already have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              <span>Login</span>
            </Link>
          </h4>
        </Form>
      </Box>
    </Container>
  );
}
const Form = styled.form`
  /* outline: 2px dotted blue; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: #6c7679;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #009994;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    align-self: center;
    height: 18rem;
  }
  h3 {
    color: #009994;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #4d565b;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;
export default Signup;
