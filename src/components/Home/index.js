import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

import {
  SidebarContainer,
  VideosContainer,
  BannerContainer,
  BannerSubContainer,
  LogoOfBanner,
  TextOfBanner,
  ButtonOfBanner,
  HideButton,
  InputContainer,
  InputSearch,
  SearchIconContainer,
  UnOrderVideosListHome,
  LoadingContainer,
  ResponseFailedContainer,
  ImgFailure,
  HeadingFailed,
  DescriptionFailed,
  Retry,
} from './styledComponent'
import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeVideoCard from '../HomeVideoCard'
import '../Header/index.css'
import AllContext from '../../context/AllContext'

const positionOfDisplay = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    isBannerActive: true,
    videosList: [],
    statusOfDisplay: positionOfDisplay.loading,
    searchValue: '',
  }

  componentDidMount() {
    this.getHomePageData()
  }

  retry = () => {
    this.getHomePageData()
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

  NoSearchFound = isLightModeOn => (
    <ResponseFailedContainer>
      <ImgFailure
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <HeadingFailed isLightModeOn={isLightModeOn}>
        No Search results found
      </HeadingFailed>
      <DescriptionFailed>
        Try different Key words or remove search filter
      </DescriptionFailed>
      <Retry type="button" onClick={this.retry}>
        Retry
      </Retry>
    </ResponseFailedContainer>
  )

  responseSuccess = isLightModeOn => {
    const {videosList} = this.state
    // const {isTrue} = this.props
    // console.log(isTrue)
    if (videosList.length === 0) {
      return this.NoSearchFound(isLightModeOn)
    }
    return (
      <>
        <UnOrderVideosListHome>
          {videosList.map(echValue => (
            <HomeVideoCard echVideo={echValue} key={echValue.id} />
          ))}
        </UnOrderVideosListHome>
      </>
    )
  }

  getHomePageData = async () => {
    const {searchValue} = this.state
    this.setState({statusOfDisplay: positionOfDisplay.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `brearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = data.videos.map(echValue => ({
        channel: echValue.channel,
        id: echValue.id,
        publishedAt: echValue.published_at,
        thumbnailUrl: echValue.thumbnail_url,
        title: echValue.title,
        viewCount: echValue.view_count,
      }))

      this.setState({
        videosList: updateData,
        statusOfDisplay: positionOfDisplay.success,
      })
    } else {
      this.setState({statusOfDisplay: positionOfDisplay.failure})
    }
  }

  displayStage = isLightModeOn => {
    const {statusOfDisplay} = this.state
    switch (statusOfDisplay) {
      case positionOfDisplay.success:
        return this.responseSuccess(isLightModeOn)
      case positionOfDisplay.failure:
        return this.responseFailure(isLightModeOn)
      case positionOfDisplay.loading:
        return this.InProccesing()
      default:
        return null
    }
  }

  clickClose = () => {
    this.setState({isBannerActive: false})
  }

  changeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  clickSearchIcon = () => {
    this.getHomePageData()
  }

  render() {
    const {isBannerActive} = this.state
    return (
      <AllContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <>
              <Header />
              <SidebarContainer>
                <Sidebar />
                <VideosContainer
                  isLightModeOn={isLightModeOn}
                  data-testid="home"
                >
                  {isBannerActive && (
                    <BannerContainer data-testid="banner">
                      <BannerSubContainer>
                        <LogoOfBanner
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <TextOfBanner>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </TextOfBanner>
                        <ButtonOfBanner type="button">
                          GET IT NOW
                        </ButtonOfBanner>
                      </BannerSubContainer>
                      <HideButton
                        type="button"
                        data-testid="close"
                        onClick={this.clickClose}
                      >
                        <GrFormClose className="close-icon-of-banner" />
                      </HideButton>
                    </BannerContainer>
                  )}
                  <InputContainer>
                    <InputSearch
                      isLightModeOn={isLightModeOn}
                      type="search"
                      placeholder="Search"
                      onChange={this.changeSearchValue}
                    />
                    <SearchIconContainer
                      isLightModeOn={isLightModeOn}
                      type="button"
                      onClick={this.clickSearchIcon}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch className="icon-search" />
                    </SearchIconContainer>
                  </InputContainer>
                  {this.displayStage(isLightModeOn)}
                </VideosContainer>
              </SidebarContainer>
            </>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default Home
