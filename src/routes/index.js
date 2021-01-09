/*
 * @description: 
 */
import { Suspense } from "react";
import routes from './routes'
import { Spin } from 'antd';
import RouteView from './RouteView.jsx'


export default (
    <Suspense fallback={<Spin tip="Loading..." delay="300" size="large"/>}>
        <RouteView routes={routes}/>
    </Suspense>
)