import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #589300;
    color: #ffffff;
  }
  &:hover span {
    color: #f9efa4;
  }
`;
export const Phone = styled.span`
  color: #20adff;
  margin-left: auto;
  margin-right: 10px;
`;
