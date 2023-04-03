import {Component} from 'react'

import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

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
  Retry,
  LoadingContainer,
} from '../Games/styledComponent'
import UnOrderTrendingList from './styledComponent'
import '../Header/index.css'
import AllContext from '../../context/AllContext'

const positionOfDisplay = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {trendingList: [], status: positionOfDisplay.loading}

  componentDidMount() {
    this.getTredingData()
  }

  retry = () => {
    this.getTredingData()
  }

  responseFailure = isLightModeOn => (
    <ResponseFailedContainer>
      {isLightModeOn ? (
        <ImgFailure
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure view"
        />
      ) : (
        <ImgFailure
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
      )}

      <HeadingFailed isLightModeOn={isLightModeOn}>
        Oops! Something Went Wrong
      </HeadingFailed>
      <DescriptionFailed>
        We are having some trouble to complete your request Please try again.
      </DescriptionFailed>
      <Retry type="button" onClick={this.retry}>
        Retry
      </Retry>
    </ResponseFailedContainer>
  )

  InProccesing = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )

  responseSuccessTrending = () => {
    const {trendingList} = this.state
    return (
      <>
        <UnOrderTrendingList>
          {trendingList.map(echValue => (
            <CardOfVideos trendingItem={echValue} key={echValue.id} />
          ))}
        </UnOrderTrendingList>
      </>
    )
  }

  getTredingData = async () => {
    this.setState({status: positionOfDisplay.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `brearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(echValue => ({
        id: echValue.id,
        title: echValue.title,
        thumbnailUrl: echValue.thumbnail_url,
        viewCount: echValue.view_count,
        publishedAt: echValue.published_at,
        channel: echValue.channel,
      }))
      console.log(updatedData)
      this.setState({
        trendingList: updatedData,
        status: positionOfDisplay.success,
      })
    } else {
      this.setState({status: positionOfDisplay.failure})
    }
  }

  displayStage = isLightModeOn => {
    const {status} = this.state
    switch (status) {
      case positionOfDisplay.success:
        return this.responseSuccessTrending()
      case positionOfDisplay.failure:
        return this.responseFailure(isLightModeOn)
      case positionOfDisplay.loading:
        return this.InProccesing()
      default:
        return null
    }
  }

  render() {
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
                  data-testid="trending"
                >
                  <GamingContainer isLightModeOn={isLightModeOn}>
                    <IconGameContainer isLightModeOn={isLightModeOn}>
                      <HiFire className="icon-game" />
                    </IconGameContainer>
                    <GamingHeading isLightModeOn={isLightModeOn}>
                      Trending
                    </GamingHeading>
                  </GamingContainer>
                  {this.displayStage(isLightModeOn)}
                </ContainerGames>
              </BgContainerGames>
            </>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default Trending
