import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_A};
`;