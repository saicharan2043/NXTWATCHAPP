import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'

import {MdPlaylistAdd} from 'react-icons/md'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import Header from '../Header'
import Sidebar from '../Sidebar'

import AllContext from '../../context/AllContext'

import {
  BgVideoItem,
  TitleHeadingInVI,
  MiddelContainerInVI,
  LeftSubMiddelContainer,
  ViewsTextInVI,
  RightSubMiddelContainer,
  LikeContainerInVI,
  LikeTextInVI,
  Hr,
  BottomContainerInVI,
  ChannelLogoInVI,
  LeftSubBottomContainer,
  ChannelNameInVI,
  SubscribersText,
  DescriptionInVILg,
  DescriptionInVISm,
  LoaderContainerItem,
} from './styledComponent'
import {
  SidebarContainer,
  ImgFailure,
  HeadingFailed,
  DescriptionFailed,
  Retry,
} from '../Home/styledComponent'

const positionOfDisplay = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItem extends Component {
  state = {
    videoDetailsList: {},
    statusOfDisplay: positionOfDisplay.loading,
    isLikeTrue: false,
    isDisLikeTrue: false,
    isSaveTrue: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  retryVideo = () => {
    this.getVideoData()
  }

  responseFailure = isLightModeOn => (
    <LoaderContainerItem>
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
      <HeadingFailed>Oops! Something Went Wrong</HeadingFailed>
      <DescriptionFailed>
        We are having some trouble to complete your request. Please try again.
      </DescriptionFailed>
      <Retry type="button" onClick={this.retryVideo}>
        Retry
      </Retry>
    </LoaderContainerItem>
  )

  InProccesing = () => (
    <LoaderContainerItem data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainerItem>
  )

  clickLikeBtn = () => {
    this.setState(privews => ({
      isLikeTrue: !privews.isLikeTrue,
      isDisLikeTrue: false,
    }))
  }

  clickDisLikeBtn = () => {
    this.setState(privews => ({
      isDisLikeTrue: !privews.isDisLikeTrue,
      isLikeTrue: false,
    }))
  }

  //   saveButtonClick = () => {
  //     this.setState(privews => {
  //       isSaveTrue: !privews.isSaveTrue
  //     })
  //   }

  responseSuccessVideoItem = () => {
    const {videoDetailsList, isDisLikeTrue, isLikeTrue, isSaveTrue} = this.state
    const {
      title,
      id,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetailsList
    const dateInWords = formatDistanceToNow(new Date(publishedAt))

    const isDisLikeCss = isDisLikeTrue ? 'like-active' : ''
    const isLikeCss = isLikeTrue ? 'like-active' : ''

    return (
      <AllContext.Consumer>
        {value => {
          const {clickSavedIcon, isLightModeOn, SavedList} = value
          const filterList = SavedList.filter(echValue => echValue.id !== id)
          let isTrueSave = false
          if (filterList.length === SavedList.length) {
            isTrueSave = false
          } else {
            isTrueSave = true
          }
          const saveButton = () => {
            clickSavedIcon(videoDetailsList)
          }
          const isSaveCss = isTrueSave ? 'like-active' : ''
          return (
            <>
              <ReactPlayer
                url={videoUrl}
                width="1000px"
                height="85vh"
                className="thumbnail-video-in-VI-lg"
                controls
              />
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="250px"
                className="thumbnail-video-in-VI-sm"
                controls
              />
              <TitleHeadingInVI isLightModeOn={isLightModeOn}>
                {title}
              </TitleHeadingInVI>
              <MiddelContainerInVI>
                <LeftSubMiddelContainer>
                  <ViewsTextInVI>{viewCount} views</ViewsTextInVI>
                  <ViewsTextInVI>{dateInWords}</ViewsTextInVI>
                </LeftSubMiddelContainer>

                <RightSubMiddelContainer>
                  <LikeContainerInVI type="button" onClick={this.clickLikeBtn}>
                    <BiLike className={`icon-like-in-VI ${isLikeCss}`} />
                    <LikeTextInVI isTrue={isLikeTrue}>Like</LikeTextInVI>
                  </LikeContainerInVI>

                  <LikeContainerInVI
                    type="button"
                    onClick={this.clickDisLikeBtn}
                  >
                    <BiDislike className={`icon-like-in-VI ${isDisLikeCss}`} />
                    <LikeTextInVI isTrue={isDisLikeTrue}>Dislike</LikeTextInVI>
                  </LikeContainerInVI>

                  <LikeContainerInVI type="button" onClick={saveButton}>
                    <MdPlaylistAdd className={`icon-like-in-VI ${isSaveCss}`} />
                    <LikeTextInVI isTrue={isTrueSave}>
                      {isTrueSave ? 'Saved' : 'Save'}
                    </LikeTextInVI>
                  </LikeContainerInVI>
                </RightSubMiddelContainer>
              </MiddelContainerInVI>

              <Hr />
              <BottomContainerInVI>
                <ChannelLogoInVI
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <LeftSubBottomContainer>
                  <ChannelNameInVI isLightModeOn={isLightModeOn}>
                    {channel.name}
                  </ChannelNameInVI>
                  <SubscribersText>
                    {channel.subscriber_count} subscribers
                  </SubscribersText>
                  <DescriptionInVILg isLightModeOn={isLightModeOn}>
                    {description}
                  </DescriptionInVILg>
                </LeftSubBottomContainer>
              </BottomContainerInVI>
              <DescriptionInVISm isLightModeOn={isLightModeOn}>
                {description}
              </DescriptionInVISm>
            </>
          )
        }}
      </AllContext.Consumer>
    )
  }

  getVideoData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({statusOfDisplay: positionOfDisplay.loading})
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `brearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: data.video_details.channel,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoDetailsList: updateData,
        statusOfDisplay: positionOfDisplay.success,
      })
      console.log(updateData)
    } else {
      this.setState({statusOfDisplay: positionOfDisplay.failure})
    }
  }

  displayStage = isLightModeOn => {
    const {statusOfDisplay} = this.state
    switch (statusOfDisplay) {
      case positionOfDisplay.success:
        return this.responseSuccessVideoItem()
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
              <SidebarContainer>
                <Sidebar />
                <BgVideoItem
                  isLightModeOn={isLightModeOn}
                  data-testid="videoItemDetails"
                >
                  {this.displayStage(isLightModeOn)}
                </BgVideoItem>
              </SidebarContainer>
            </>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default VideoItem
