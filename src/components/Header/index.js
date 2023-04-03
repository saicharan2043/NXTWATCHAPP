import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {Component} from 'react'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavBarLg,
  LogoNavLg,
  SubContainerNavLg,
  HideButton,
  ProfileImg,
  LogOutBtn,
  NavBarSuperSm,
  NavBarSubSm,
  LogNavSm,
  SubContainerNavSm,
  UnOrderListTabs,
  ListTabs,
  NameTab,
  PopupContainer,
  HeadingPopup,
  ButtonsContainer,
  ButtonPopup,
  ButtonConfirm,
} from './styledComponent'

import './index.css'
import AllContext from '../../context/AllContext'

class Header extends Component {
  state = {isMenuClick: false}

  clickMenu = () => {
    this.setState(privwes => ({isMenuClick: !privwes.isMenuClick}))
  }

  clickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {isMenuClick} = this.state

    return (
      <AllContext.Consumer>
        {value => {
          const {clickLightModeBtn, isLightModeOn} = value

          const clickModeBtn = () => {
            clickLightModeBtn()
          }

          return (
            <>
              <NavBarLg isLightModeOn={isLightModeOn}>
                <Link to="/" className="link">
                  {isLightModeOn ? (
                    <LogoNavLg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <LogoNavLg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                      className="logo-nav-lg"
                    />
                  )}
                </Link>
                <SubContainerNavLg className="sub-container-nav-lg">
                  <HideButton
                    type="button"
                    onClick={clickModeBtn}
                    data-testid="theme"
                  >
                    {isLightModeOn ? (
                      <FiSun className="light-mode-icon" />
                    ) : (
                      <FaMoon className="night-mode-icon" />
                    )}
                  </HideButton>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    className="profile-img"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <LogOutBtn type="button" isLightModeOn={isLightModeOn}>
                        Logout
                      </LogOutBtn>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <PopupContainer isLightModeOn={isLightModeOn}>
                        <HeadingPopup isLightModeOn={isLightModeOn}>
                          Are you sure, you want to logout
                        </HeadingPopup>
                        <ButtonsContainer>
                          <ButtonPopup
                            type="button"
                            onClick={() => close()}
                            isLightModeOn={isLightModeOn}
                          >
                            Cancel
                          </ButtonPopup>
                          <ButtonConfirm
                            onClick={this.clickLogout}
                            type="button"
                          >
                            Confirm
                          </ButtonConfirm>
                        </ButtonsContainer>
                      </PopupContainer>
                    )}
                  </Popup>
                </SubContainerNavLg>
              </NavBarLg>

              {/* small device */}
              <NavBarSuperSm isLightModeOn={isLightModeOn}>
                <NavBarSubSm>
                  <Link to="/" className="link">
                    {isLightModeOn ? (
                      <LogNavSm
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                        alt="website logo"
                      />
                    ) : (
                      <LogNavSm
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                      />
                    )}
                  </Link>

                  <SubContainerNavSm>
                    <HideButton onClick={clickModeBtn}>
                      {isLightModeOn ? (
                        <FiSun className="light-mode-icon" />
                      ) : (
                        <FaMoon className="night-mode-icon" />
                      )}
                    </HideButton>
                    <HideButton type="button" onClick={this.clickMenu}>
                      <GiHamburgerMenu
                        className={isLightModeOn ? 'light-icons' : 'dark-icons'}
                      />
                    </HideButton>

                    <Popup
                      modal
                      trigger={
                        <HideButton className="hide-button" type="button">
                          <FiLogOut
                            className={
                              isLightModeOn ? 'light-icons' : 'dark-icons '
                            }
                          />
                        </HideButton>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <PopupContainer isLightModeOn={isLightModeOn}>
                          <HeadingPopup isLightModeOn={isLightModeOn}>
                            Are you sure, you want to logout
                          </HeadingPopup>
                          <ButtonsContainer>
                            <ButtonPopup
                              type="button"
                              onClick={() => close()}
                              isLightModeOn={isLightModeOn}
                            >
                              Cancel
                            </ButtonPopup>
                            <ButtonConfirm
                              onClick={this.clickLogout}
                              type="button"
                            >
                              Confirm
                            </ButtonConfirm>
                          </ButtonsContainer>
                        </PopupContainer>
                      )}
                    </Popup>
                  </SubContainerNavSm>
                </NavBarSubSm>
                {isMenuClick && (
                  <UnOrderListTabs>
                    <Link to="/" className="link">
                      <ListTabs>
                        <AiFillHome
                          className={
                            isLightModeOn ? 'icons-light-mode' : 'icons-tab'
                          }
                        />
                        <NameTab isLightModeOn={isLightModeOn}>Home</NameTab>
                      </ListTabs>
                    </Link>

                    <Link to="/trending" className="link">
                      <ListTabs>
                        <HiFire
                          className={
                            isLightModeOn ? 'icons-light-mode' : 'icons-tab'
                          }
                        />
                        <NameTab isLightModeOn={isLightModeOn}>
                          Trending
                        </NameTab>
                      </ListTabs>
                    </Link>

                    <Link to="/gaming" className="link">
                      <ListTabs>
                        <SiYoutubegaming
                          className={
                            isLightModeOn ? 'icons-light-mode' : 'icons-tab'
                          }
                        />
                        <NameTab isLightModeOn={isLightModeOn}>Gaming</NameTab>
                      </ListTabs>
                    </Link>

                    <Link to="/saved-videos" className="link">
                      <ListTabs>
                        <MdPlaylistAdd
                          className={
                            isLightModeOn ? 'icons-light-mode' : 'icons-tab'
                          }
                        />
                        <NameTab isLightModeOn={isLightModeOn}>
                          SavedVideos
                        </NameTab>
                      </ListTabs>
                    </Link>
                  </UnOrderListTabs>
                )}
              </NavBarSuperSm>
            </>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default withRouter(Header)
