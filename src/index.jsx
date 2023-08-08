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
import { LanguageProvider } from './shared/components/language-switcher/provider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ThemeContextProvider>
      <LanguageProvider>
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
      </LanguageProvider>
    </ThemeContextProvider>,
);
