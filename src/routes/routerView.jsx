import {RouteConsumer} from './context'
import renderRoutes from './renderRoutes'


export default function RouterView(){
    return (
        <RouteConsumer>
            {(routes)=>{
                console.log(routes)
                return renderRoutes(routes)
            }}
        </RouteConsumer>
    )
}