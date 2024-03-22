import {Route, Routes} from 'react-router-dom'
import {HomePage} from './home'
import React from 'react'
import {PostPage} from "./post";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path=":id" element={<PostPage />} />
        </Routes>
    )
}
