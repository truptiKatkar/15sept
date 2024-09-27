import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import "../../styles/Login.css";
import { Header } from "./Header";

// export const UsersLogin = () => {
//   return (
//     <Container fluid my="md" className="h-100 m-0">
//       <Header />
//       <Grid className="h-100">
//         <Grid.Col span={3}></Grid.Col>
//         <Grid.Col span={6} className="h-100 flex-box">
//           <Box>
//             <Card
//               withBorder
//               padding="md"
//               shadow="lg"
//               className="bg-dark rounded-2"
// 			  p={40}
//             >
//               <Card.Section mb={10} px={25}>
//                 <Text fw={700} className="text-white title">
//                   Login to your account
//                 </Text>
//               </Card.Section>
//               <Card.Section p={3}>
//                 <Box className="text-white" px={25}>
//                   <TextInput
//                     mb={10}
//                     label="Email/Username"
//                     placeholder="Enter your email or username"
//                     required
//                   />
//                   <PasswordInput
//                     // value={value}
//                     // onChange={setValue}
//                     mb={30}
//                     placeholder="Your password"
//                     label="Password"
//                     required
//                   />
//                   <Box className="text-center">
//                     <Button fullWidth mb={15}>
//                       Sign In
//                     </Button>
//                   </Box>
//                 </Box>
//               </Card.Section>
//             </Card>
//           </Box>
//         </Grid.Col>
//         <Grid.Col span={3}></Grid.Col>
//       </Grid>
//     </Container>
//   );
// };

import React from 'react';

const UsersLogin: React.FC = () => {
  return (
    <Container fluid my="md" className="h-100 m-0">
      <Header />
      <Grid className="h-100">
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={6} className="h-100 flex-box">
          <Box>
            <Card
              withBorder
              padding="md"
              shadow="lg"
              className="bg-dark rounded-2"
			  p={40}
            >
              <Card.Section mb={10} px={25}>
                <Text fw={700} className="text-white title">
                  Login to your account
                </Text>
              </Card.Section>
              <Card.Section p={3}>
                <Box className="text-white" px={25}>
                  <TextInput
                    mb={10}
                    label="Email/Username"
                    placeholder="Enter your email or username"
                    required
                  />
                  <PasswordInput
                    // value={value}
                    // onChange={setValue}
                    mb={30}
                    placeholder="Your password"
                    label="Password"
                    required
                  />
                  <Box className="text-center">
                    <Button fullWidth mb={15}>
                      Sign In
                    </Button>
                  </Box>
                </Box>
              </Card.Section>
            </Card>
          </Box>
        </Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
    </Container>
  );
};

export default UsersLogin;
