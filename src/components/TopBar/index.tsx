//Styles
import { Container, User } from "./styles";
//Icon
import userAvatar from "../../assets/images/icons/user.svg";

const TopBar = () => (
  <Container>
    <h2>Shopping Sup</h2>
    <User>
      <img src={userAvatar} alt="User Avatar" />
      <h3>User Name</h3>
    </User>
  </Container>
);

export default TopBar;
