import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  // 动态插入
  color: ${(props) => props.theme.color.primaryColor};

  .logo {
    margin-left: 25px;
    cursor: pointer;
  }
`;
