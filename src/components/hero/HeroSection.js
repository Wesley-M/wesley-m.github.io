import {ReactComponent as WavingHandIcon} from '../../images/waving-hand.svg';
import Typed from "./Typed";

import {
  HeroContainer,
  MessageContainer,
  Message,
  Occupation,
  ProfileImage,
  ProfileImageContainer,
  ProfileName,
  Waving,
  Introduction, IntroductionContainer
} from "./HeroSection.styles";

import textToType from "../../content/type.json"
import photo from "../../images/me.jpg"
import {useState} from "react";
import {Skeleton} from "@mui/material";

function HeroSection() {
  const [isImageLoaded, setImageLoadStatus] = useState(false);

  return (
    <HeroContainer container spacing={2}>
      <ProfileImageContainer item xs={12} sm={12} md={4} lg={3}>
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
              width: "16em",
              height: "16em",
              borderRadius: "1em"
            }}
          />
      </ProfileImageContainer>

      <IntroductionContainer item xs={12} sm={12} md={8} lg={9}>
        <Introduction>
          <ProfileName>Wesley Santos</ProfileName>
          <Occupation>Full Stack Web Developer</Occupation>
          <MessageContainer>
            <Message>
              Hi!
              <Waving component="span">
                <WavingHandIcon/>
              </Waving>
            </Message>

            <Typed
              type={textToType.type}
              RenderComponent={Message}
            />
          </MessageContainer>
        </Introduction>
      </IntroductionContainer>
    </HeroContainer>
  )
}

export default HeroSection