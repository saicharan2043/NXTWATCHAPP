import {withRouter, Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  ListCard,
  ThumbnailCard,
  TitleSideContainer,
  TitleSideBottomSm,
  ChannelLogoImgCard,
  TitleCard,
  ChannelNameCard,
  ViewsContainerCard,
  ViewsTextCard,
} from './styledComponent'
import AllContext from '../../context/AllContext'

import '../Header/index.css'

const CardOfVideos = props => {
  const {trendingItem} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = trendingItem
  const dateInWords = formatDistanceToNow(new Date(publishedAt))
  const clickTrendingVideo = () => {
    const {history} = props
    history.replace(`/videos/${id}`)
  }

  return (
    <AllContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <>
            <ListCard onClick={clickTrendingVideo}>
              <ThumbnailCard src={thumbnailUrl} alt="video thumbnail" />
              <TitleSideContainer>
                <TitleCard isLightModeOn={isLightModeOn}>{title}</TitleCard>
                <ChannelNameCard>{channel.name}</ChannelNameCard>
                <ViewsContainerCard>
                  <ViewsTextCard>{viewCount} views</ViewsTextCard>
                  <ViewsTextCard>{dateInWords}</ViewsTextCard>
                </ViewsContainerCard>
              </TitleSideContainer>

              <TitleSideBottomSm>
                <ChannelLogoImgCard
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <div className="">
                  <TitleCard isLightModeOn={isLightModeOn}>{title}</TitleCard>
                  <ViewsContainerCard>
                    <ViewsTextCard>{channel.name}</ViewsTextCard>
                    <ViewsTextCard>{viewCount} views</ViewsTextCard>
                    <ViewsTextCard>{publishedAt}</ViewsTextCard>
                  </ViewsContainerCard>
                </div>
              </TitleSideBottomSm>
            </ListCard>
          </>
        )
      }}
    </AllContext.Consumer>
  )
}

export default withRouter(CardOfVideos)
