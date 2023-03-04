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

function HeroSection() {
  return (
    <HeroContainer container spacing={2}>
      <ProfileImageContainer item xs={12} sm={12} md={4} lg={3}>
        <ProfileImage src={photo} alt="My profile image"/>
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