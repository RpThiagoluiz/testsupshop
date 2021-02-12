import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  background: -webkit-linear-gradient(
    108deg,
    ${({ theme }) => theme.colors.primary} 15%,
    ${({ theme }) => theme.colors.secondary} 34%,
    ${({ theme }) => theme.colors.tertiary} 50%,
    ${({ theme }) => theme.colors.fourth} 73%
  );
`;
