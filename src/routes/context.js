import {createContext} from 'react'

const RouteContext = createContext([])

export const RouteProvider = RouteContext.Provider;
export const RouteConsumer = RouteContext.Consumer;