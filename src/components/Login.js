import React from "react";
import {Button, Form} from 'react-bootstrap';
import logo from "../media/1.png";

function Login() {
    return (
      <div style="margin: 300px auto;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: sans-serif;"
      >
          <h3>Welcome to Discord OAuth NodeJS App</h3>
          <p>Click on the below button to get started!</p>
          <a 
              href="https://discord.com/oauth2/authorize?client_id=1217203680294469695&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fdiscord&scope=identify+email"
              style="outline: none;
              padding: 10px;
              border: none;
              font-size: 20px;
              margin-top: 20px;
              border-radius: 8px;
              background: #6D81CD;
              cursor:pointer;
              text-decoration: none;
              color: white;"
          >
          Login with Discord</a>
      </div>
    )
} export default Login;