import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

import {BlogList} from "./blog/BlogList";
import Post from "./blog/Post";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<App />} />
          <Route path="blog" element={<Outlet />}>
            <Route index element={<BlogList />} />
            <Route path=":id" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
);
