import styled from 'styled-components'

export const ListCard = styled.li`
  width: 95%;
  margin: 0px;
  margin-bottom: 80px;
  display: flex;
  padding: 0px;
  cursor: pointer;
  @media (max-width: 567px) {
    flex-direction: column;
    width: 100%;
  }
`

export const ThumbnailCard = styled.img`
  width: 45%;
  height: 220px;
  margin-right: 20px;
  @media (max-width: 767px) {
    width: 55%;
  }
  @media (max-width: 567px) {
    width: 100%;
  }
`

export const TitleSideContainer = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 60%;
  @media (max-width: 767px) {
    width: 45%;
  }
  @media (max-width: 567px) {
    display: none;
  }
`

export const TitleSideBottomSm = styled.div`
  display: none;
  @media (max-width: 567px) {
    display: block;
    display: flex;
    width: 100%;
    padding: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
  }
`

export const ChannelLogoImgCard = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`

export const TitleCard = styled.p`
  font-family: Roboto;
  font-size: 22px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#181818')};
  margin-bottom: 0px;
  line-height: 40px;
  margin-top: 5px;
  @media (max-width: 567px) {
    line-height: 30px;
    font-size: 18px;
  }
`

export const ChannelNameCard = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#181818')};
  margin-bottom: 0px;
  font-weight: 100;
`

export const ViewsContainerCard = styled.div`
  display: flex;
`

export const ViewsTextCard = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #64748b;
  margin-right: 15px;
`
