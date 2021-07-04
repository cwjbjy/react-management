import {center} from './flex'
import styled from "styled-components";

import { Spin } from "antd";

const FullScreen = styled.div`
  width: 100%;
  height: 100vh;
  ${center}
`;

export const FullScreenLoading = ()=>{
    return(
        <FullScreen>
            <Spin tip="Loading..." delay="1000" size="large" />
        </FullScreen>
    )
}