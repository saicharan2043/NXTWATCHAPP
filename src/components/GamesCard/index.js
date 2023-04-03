import {withRouter} from 'react-router-dom'

import {
  ListOfGames,
  ThumbnailOfGame,
  TitleOfGame,
  DescriptionOfGame,
} from './styledComponent'
import AllContext from '../../context/AllContext'

const GamesCard = props => {
  const {gameItem} = props
  const {id, title, thumbnailUrl, viewCount} = gameItem
  console.log(thumbnailUrl)
  const clickGameCard = () => {
    const {history} = props
    history.replace(`/videos/${id}`)
  }

  return (
    <AllContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <ListOfGames onClick={clickGameCard}>
            <ThumbnailOfGame src={thumbnailUrl} alt="video thumbnail" />
            <TitleOfGame isLightModeOn={isLightModeOn}>{title}</TitleOfGame>
            <DescriptionOfGame>
              {viewCount} Watching Worldwide
            </DescriptionOfGame>
          </ListOfGames>
        )
      }}
    </AllContext.Consumer>
  )
}

export default withRouter(GamesCard)
