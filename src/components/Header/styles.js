import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 105px;
  width 100%;

  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 124px;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  gap: 8px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100}
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`;
