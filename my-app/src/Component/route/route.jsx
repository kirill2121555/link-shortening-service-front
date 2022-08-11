import React from 'react'
import Castomlink from '../Castomlink/Castomlink'
import Page from '../MainPage/Page'
import Statistics from '../Statistics/Statistics'

export const publicRoutes = [
    {
        path: "/castomlink",
        Element: <Castomlink />
    },
    {
        path: "/",
        Element: <Page />
    },
    {
        path: "/statistics",
        Element: <Statistics />
    },
]