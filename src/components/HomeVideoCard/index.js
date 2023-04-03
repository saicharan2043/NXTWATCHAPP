import {withRouter, Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  ListOfVideo,
  ThumbnailImg,
  BottomContainerHome,
  ChannelLogo,
  TitleContainer,
  TitleOfVideo,
  ChannelName,
  ViewsContainer,
} from './styledComponent'
import '../Header/index.css'

import AllContext from '../../context/AllContext'

const HomeVideoCard = props => {
  const {echVideo} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = echVideo
  const dateInWords = formatDistanceToNow(new Date(publishedAt))

  const clickHomeVideos = () => {
    const {history} = props
    history.replace(`/videos/${id}`)
  }

  return (
    <AllContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <ListOfVideo onClick={clickHomeVideos}>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <BottomContainerHome>
              <ChannelLogo src={channel.profile_image_url} alt="channel logo" />
              <TitleContainer>
                <TitleOfVideo isLightModeOn={isLightModeOn}>
                  {title}
                </TitleOfVideo>
                <ChannelName>{channel.name}</ChannelName>
                <ViewsContainer>
                  <ChannelName>{viewCount} views</ChannelName>
                  <ChannelName>{dateInWords}</ChannelName>
                </ViewsContainer>
              </TitleContainer>
            </BottomContainerHome>
          </ListOfVideo>
        )
      }}
    </AllContext.Consumer>
  )
}

export default withRouter(HomeVideoCard)
