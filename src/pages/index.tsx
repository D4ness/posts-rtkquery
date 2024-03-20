import {Route, Routes} from 'react-router-dom'
import {HomePage} from './home'
import TestPage2 from './test2/test2'
import React from 'react'
import {PostPage} from "./post";

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="testdva" element={<TestPage2 />}/>
            <Route path=":id" element={<PostPage />} />
        </Routes>
    )
}
