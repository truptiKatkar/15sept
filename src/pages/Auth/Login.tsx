import {
  Box,
  Button,
  Container,
  Grid,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { getImage } from "../../utils/GetImage";
import "../../styles/Login.css";
import { useState } from "react";

const Login = () => {
  const logo = getImage("logo.webp");
  const background = getImage("login.jpg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container fluid my="md" className="h-100 m-0">
      <Grid className="h-100">
        <Grid.Col span={4} className="bg-dark h-100 flex-box">
          <Box className="logo-container" mb={10} mx={"auto"}>
            <img src={logo} alt="Logo" className="logo" />
          </Box>
          <Box className="text-white" px={30}>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb={10}
              label="Email/Username"
              placeholder="Enter your email or username"
              required
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb={30}
              placeholder="Your password"
              label="Password"
              required
            />
            <Box className="text-center">
              <Button fullWidth>Sign In</Button>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={8} className="h-100" p={0}>
          <Box className="h-100">
            <img src={background} alt="background" className="logo" />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Login;
