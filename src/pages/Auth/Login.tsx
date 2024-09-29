import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { getImage } from "../../utils/GetImage";
import "../../styles/Login.css";
import { useState } from "react";

const Login: React.FC = () => {
  const logo = getImage("logo.webp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="wrapper">
      <Paper className="form" radius={0} p={30}>
        <Box className="logo-container" mb={50} mx={"auto"}>
          <img src={logo} alt="Logo" className="logo" />
        </Box>

        <TextInput
          label="Email/Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email or username"
          size="md"
          required
        />
        <PasswordInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          mt="md"
          size="md"
          required
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="#"
            fw={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;
