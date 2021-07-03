import styled from "styled-components";
import { center } from "./flex";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(25, 202, 173, 1);
`;

export const Header = styled(center)`
  font-size: 50px;
  letter-spacing: 5px;
  height: 20vh;
  color: #fff;
`;

export const Main = styled(center)`
  width: 100%;
  min-height: 450px;
`;

export const Form = styled.div`
  width: 400px;
  min-height: 370px;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-sizing: border-box;
  .tab {
    width: 190px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 30px;
    .tab_title {
      display: inline-block;
      flex: 1;
      height: 38px;
      line-height: 38px;
      text-align: center;
      font-size: 16px;
      color: #999;
      cursor: pointer;
      &:hover {
        color: #0078dc;
      }
    }
    .title_active {
      color: #0078dc;
      border-bottom: 2px solid $border;
    }
  }
`;
