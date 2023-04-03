import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import CardOfVideos from '../CardOfVideos'

import {
  BgContainerGames,
  ContainerGames,
  GamingContainer,
  IconGameContainer,
  GamingHeading,
  ResponseFailedContainer,
  ImgFailure,
  HeadingFailed,
  DescriptionFailed,
} from '../Games/styledComponent'
import UnOrderTrendingList from '../Trending/styledComponent'
import '../Header/index.css'
import AllContext from '../../context/AllContext'

const SavedVideos = () => {
  const emptyList = isLightModeOn => (
    <ResponseFailedContainer>
      <ImgFailure
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <HeadingFailed isLightModeOn={isLightModeOn}>
        No saved videos found
      </HeadingFailed>
      <DescriptionFailed>
        You can save your videos while watching them
      </DescriptionFailed>
    </ResponseFailedContainer>
  )

  const DisplaySavedItems = isLightModeOn => (
    <AllContext.Consumer>
      {value => {
        const {SavedList} = value
        if (SavedList.length === 0) {
          return emptyList(isLightModeOn)
        }
        return (
          <>
            <UnOrderTrendingList>
              {SavedList.map(echValue => (
                <CardOfVideos trendingItem={echValue} key={echValue.id} />
              ))}
            </UnOrderTrendingList>
          </>
        )
      }}
    </AllContext.Consumer>
  )

  return (
    <AllContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <>
            <Header />
            <BgContainerGames>
              <Sidebar />
              <ContainerGames
                isLightModeOn={isLightModeOn}
                data-testid="savedVideos"
              >
                <GamingContainer isLightModeOn={isLightModeOn}>
                  <IconGameContainer isLightModeOn={isLightModeOn}>
                    <HiFire className="icon-game" />
                  </IconGameContainer>
                  <GamingHeading isLightModeOn={isLightModeOn}>
                    Saved Videos
                  </GamingHeading>
                </GamingContainer>
                {DisplaySavedItems(isLightModeOn)}
              </ContainerGames>
            </BgContainerGames>
          </>
        )
      }}
    </AllContext.Consumer>
  )
}

export default SavedVideos
