import styled from "styled-components";

export const Container = styled.nav`
  height: 80px;
  padding: 0 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.black};
  margin-bottom: 80px;

  > h1 {
    font-size: 48px;
    color: #e37422;
  }
`;
export const User = styled.section`
  display: flex;
  align-items: center;

  > img {
    margin: 8px;
    background-color: ${({ theme }) => theme.colors.text.white};
    border-radius: 50%;
    width: 38px;
    height: 38px;
  }
`;
