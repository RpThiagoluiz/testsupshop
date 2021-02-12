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

  > h2 {
    font-size: 38px;
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
export const User = styled.section`
  display: flex;
  align-items: center;

  > h3 {
    color: ${({ theme }) => theme.colors.text.white};
  }

  > img {
    width: 38px;
    height: 38px;

    margin: 8px;
    border-radius: 50%;
  }
`;
