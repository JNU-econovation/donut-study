import styled from "styled-components";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <StyledHeader>
      <h1>veelog</h1>
      <div className="header_menu">
        <FaBell />
        <IoMdSearch />
        <FaUserCircle />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-block: 1rem;
  }

  .header_menu {
    display: flex;
    gap: 1.4rem;
    svg {
      font-size: 1.5rem;
    }
  }
`;
