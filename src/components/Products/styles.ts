import styled from "styled-components";

export const Container = styled.section`
  width: 150px;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin: 0 25px 25px 25px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  overflow: auto;

  transition: all 0.5s ease-in;

  &:hover {
    border: 5px;
    box-shadow: 2px 2px 3px 1px ${(props) => props.theme.colors.tertiary};
  }
`;
