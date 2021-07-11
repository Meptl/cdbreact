import styled from "styled-components";


export const MenuContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 2px 8px 15px;
  height: 45px;
  outline: none;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  transition: opacity 0.25s 0.05s, visibility 0s, 0.3s;

  &.toggled.isShy {
    opacity 0;
    visibility: hidden;
  }
`;


