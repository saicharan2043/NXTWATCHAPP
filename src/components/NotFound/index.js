import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  BgContainerGames,
  ContainerGames,
  ImgFailure,
  ResponseFailedContainer,
  HeadingFailed,
  DescriptionFailed,
} from '../Games/styledComponent'
import AllContext from '../../context/AllContext'

const NotFound = () => (
  <AllContext.Consumer>
    {value => {
      const {isLightModeOn} = value
      return (
        <>
          <Header />
          <BgContainerGames>
            <Sidebar />
            <ContainerGames isLightModeOn={isLightModeOn}>
              <ResponseFailedContainer>
                {isLightModeOn ? (
                  <ImgFailure
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                    alt="not found"
                  />
                ) : (
                  <ImgFailure
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                )}
                <HeadingFailed isLightModeOn={isLightModeOn}>
                  Page Not Found
                </HeadingFailed>
                <DescriptionFailed>
                  we are sorry, the page you requested could not be found.
                </DescriptionFailed>
              </ResponseFailedContainer>
            </ContainerGames>
          </BgContainerGames>
        </>
      )
    }}
  </AllContext.Consumer>
)

export default NotFound
