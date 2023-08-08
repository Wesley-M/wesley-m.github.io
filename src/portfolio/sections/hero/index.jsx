import { ReactComponent as WavingHandIcon } from '../../assets/images/waving-hand.svg';
import {
  HeroContainer,
  Introduction,
  IntroductionContainer,
  Message,
  MessageContainer,
  Occupation,
  ProfileImage,
  ProfileImageContainer,
  ProfileName,
  Waving,
} from './index.styles';
import { Skeleton, useTheme } from '@mui/material';
import React, { useState } from 'react';
import photo from '../../assets/images/me.jpg';
import { useIsMobile } from '../../../shared/hooks/useIsMobile';
import { Typed } from '../../components/typed';
import { useTranslation } from 'react-i18next';

export function HeroSection () {
  const [isImageLoaded, setImageLoadStatus] = useState(false);
  const isMobile = useIsMobile();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <HeroContainer gap={3} sx={{ flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
      <ProfileImageContainer>
        <ProfileImage
          onLoad={() => setImageLoadStatus(true)}
          src={photo}
          loading="eager"
          alt="My profile image"
          sx={{ display: isImageLoaded ? 'flex' : 'none' }}
        />
        <Skeleton
          variant="rounded"
          sx={{
            display: isImageLoaded ? 'none' : 'flex',
            width: '16em',
            height: '16em',
            borderRadius: '1em',
          }}
        />
      </ProfileImageContainer>

      <IntroductionContainer sx={{ justifyContent: isMobile ? 'center' : 'left' }}>
        <Introduction>
          <ProfileName>Wesley Santos</ProfileName>
          <Occupation>{t('portfolio.hero.occupation')}</Occupation>
          <MessageContainer>
            <Message>
              {t('portfolio.hero.hi')}!
              <Waving component="span">
                <WavingHandIcon />
              </Waving>
            </Message>

            <Typed
              type={t('portfolio.hero.type', { returnObjects: true })}
              cursorColor={theme.palette.text.main}
              RenderComponent={Message}
            />
          </MessageContainer>
        </Introduction>
      </IntroductionContainer>
    </HeroContainer>
  );
}
