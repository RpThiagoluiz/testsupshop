import styled from "styled-components";

export const Container = styled.section`
  width: 150px;
  height: 250px;

  margin: 0 25px 25px 25px;
  background-color: ${({ theme }) => theme.colors.tertiary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  overflow: auto;

  border-radius: 5px;
`;
