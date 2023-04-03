import styled from 'styled-components'

export const ListOfVideo = styled.li`
  width: 31%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-right: 20px;
  margin-bottom: 60px;
  @media (max-width: 767px) {
    width: 45%;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 30px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    height: 150px;
  }
  @media (max-width: 576px) {
    height: 220px;
  }
`

export const BottomContainerHome = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`

export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-start;
  margin-right: 15px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`

export const TitleOfVideo = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.isLightModeOn ? '#f1f5f9' : '#0f0f0f')};
  margin-top: 0px;
  margin-bottom: 5px;
  line-height: 25px;
`

export const ViewsContainer = styled.p`
  display: flex;
  margin-top: 0px;
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #64748b;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
`
