import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';
import Blog from './blog';
import posts from './blog/posts/metadata.json';
import Portfolio from './portfolio';
import { ThemeContextProvider } from './shared/themes/ThemeContext';
import { BlogList } from './blog/components/blog-list';
import { Post } from './blog/components/post';
import './i18n';

const container = document.getElementById('root');
const root = createRoot(container);

TimeAgo.addDefaultLocale(en);

root.render(
    <ThemeContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Portfolio />} />
            <Route path="blog" element={<Blog />}>
              <Route index element={<BlogList posts={posts} />} />
              <Route path=":id" element={<Post />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </ThemeContextProvider>,
);
