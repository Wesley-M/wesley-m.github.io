import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import {Route, Routes, Outlet, HashRouter} from "react-router-dom";
import TimeAgo from 'javascript-time-ago'

import Post from "./blog/components/Post";
import Blog from "./Blog";
import posts from "./blog/posts/metadata.json";
import {BlogList} from "./blog/BlogList";
import en from 'javascript-time-ago/locale/en.json';
import {ThemeContextProvider} from "./themes/ThemeContext";

const container = document.getElementById('root');
const root = createRoot(container);

TimeAgo.addDefaultLocale(en);

root.render(
  <ThemeContextProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route index element={<App/>}/>
          <Route path="blog" element={<Blog/>}>
            <Route index element={<BlogList posts={posts}/>}/>
            <Route path=":id" element={<Post/>}/>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </ThemeContextProvider>
);
