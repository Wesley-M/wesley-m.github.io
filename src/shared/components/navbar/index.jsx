import React from 'react';

import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../../themes/ThemeSwitcher';
import { Logo, NavLink } from './index.styles';
import { Sidebar } from '../sidebar';
import { LanguageSwitcher } from '../language-switcher';
import { useTranslation } from 'react-i18next';

export function Navbar ({ isBlog = false }) {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ margin: '0 10%', padding: '0 4px' }}>
          <Logo to={isBlog ? '/blog' : '/'}>
            <Typography>{t(`navigation.${isBlog ? 'blog' : 'portfolio'}`)}</Typography>
          </Logo>

          <Box sx={{ flexGrow: 16 }} />

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              placeItems: 'center',
              gap: '1em',
            }}
          >
            <Link to={isBlog ? '/' : '/blog'} style={{ textDecoration: 'none' }}>
              <NavLink>
                <Typography>{t(`navigation.${isBlog ? 'portfolio' : 'blog'}`)}</Typography>
              </NavLink>
            </Link>
            <NavLink href="/#/blog/who_am_i">
              <Typography>{t('navigation.about')}</Typography>
            </NavLink>
            <NavLink href="mailto:wesleymatteus99@gmail.com">
              <Typography>{t('navigation.contactMe')}</Typography>
            </NavLink>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </Box>

          <Stack direction="row" gap={2} sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <ThemeSwitcher />
            <LanguageSwitcher />
            <Sidebar />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
