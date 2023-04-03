import styled from 'styled-components'

export const ListOfGames = styled.li`
  width: 30%;
  margin-right: 30px;
  margin-bottom: 80px;
  list-style: none;
  padding: 0px;
  cursor: pointer;
  border-radius: 15px;
  @media (max-width: 767px) {
    width: 30%;
    margin-right: 10px;
    margin-left: 12px;
  }
  @media (max-width: 567px) {
    width: 42%;
    margin-right: 10px;
    margin-left: 16px;
  }
`

export const ThumbnailOfGame = styled.img`
  width: 100%;
  height: 400px;
  margin-bottom: 15px;
  border-radius: 12px;
  @media (max-width: 767px) {
    height: 300px;
  }
  @media (max-width: 567px) {
    height: 210px;
    width: 100%;
  }
`

export const TitleOfGame = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#181818')};
  margin: 0px;
  margin-bottom: 5px;
  @media (max-width: 567px) {
    font-size: 18px;
  }
`

export const DescriptionOfGame = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #475569;
  margin: 0px;
  margin-bottom: 5px;
  @media (max-width: 567px) {
    font-size: 18px;
  }
`
