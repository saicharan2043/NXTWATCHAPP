import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SidebarContainer,
  BottomContainer,
  ContactUsText,
  ContainerOfSocialMedia,
  LogoOfSocialMedia,
  Description,
} from './styledComponent'
import {UnOrderListTabs, ListTabs, NameTab} from '../Header/styledComponent'
import '../Header/index.css'
import AllContext from '../../context/AllContext'

const Sidebar = () => (
  <AllContext.Consumer>
    {value => {
      const {isLightModeOn} = value
      return (
        <>
          <SidebarContainer isLightModeOn={isLightModeOn}>
            <UnOrderListTabs>
              <Link to="/" className="link">
                <ListTabs>
                  <AiFillHome
                    className={isLightModeOn ? 'icons-light-mode' : 'icons-tab'}
                  />
                  <NameTab isLightModeOn={isLightModeOn}>Home</NameTab>
                </ListTabs>
              </Link>

              <Link to="/trending" className="link">
                <ListTabs>
                  <HiFire
                    className={isLightModeOn ? 'icons-light-mode' : 'icons-tab'}
                  />
                  <NameTab isLightModeOn={isLightModeOn}>Trending</NameTab>
                </ListTabs>
              </Link>

              <Link to="/gaming" className="link">
                <ListTabs>
                  <SiYoutubegaming
                    className={isLightModeOn ? 'icons-light-mode' : 'icons-tab'}
                  />
                  <NameTab isLightModeOn={isLightModeOn}>Gaming</NameTab>
                </ListTabs>
              </Link>

              <Link to="/saved-videos" className="link">
                <ListTabs>
                  <MdPlaylistAdd
                    className={isLightModeOn ? 'icons-light-mode' : 'icons-tab'}
                  />
                  <NameTab isLightModeOn={isLightModeOn}>Saved Videos</NameTab>
                </ListTabs>
              </Link>
            </UnOrderListTabs>

            <BottomContainer>
              <ContactUsText isLightModeOn={isLightModeOn}>
                CONTACT US
              </ContactUsText>
              <ContainerOfSocialMedia>
                <LogoOfSocialMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <LogoOfSocialMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LogoOfSocialMedia
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContainerOfSocialMedia>
              <Description isLightModeOn={isLightModeOn}>
                Enjoy! Now to see your channels and recommendations!
              </Description>
            </BottomContainer>
          </SidebarContainer>
        </>
      )
    }}
  </AllContext.Consumer>
)

export default Sidebar
