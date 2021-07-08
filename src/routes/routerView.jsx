import {RouteConsumer} from './context'
import renderRoutes from './renderRoutes'


export default function RouterView(){
    return (
        <RouteConsumer>
            {(routes)=>{
                return renderRoutes(routes)
            }}
        </RouteConsumer>
    )
}