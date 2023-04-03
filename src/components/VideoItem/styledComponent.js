import styled from 'styled-components'

export const BgVideoItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 130vh;
  width: 79%;
  overflow: auto;
  padding: 25px;
  background-color: ${props => (props.isLightModeOn ? '#0f0f0f ' : '#f9f9f9 ')};
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    min-height: 100vh;
  }
`

export const TitleHeadingInVI = styled.p`
  font-family: Roboto;
  font-size: 22px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#1e293b')};
  margin-top: 40px;
  @media (max-width: 767px) {
    font-size: 18px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 25px;
    align-self: flex-start;
  }
`

export const MiddelContainerInVI = styled.div`
  display: flex;
  margin: 25px;
  margin-left: 0px;
  justify-content: space-between;
  width: 97%;
  padding: 0px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: start;
    margin: 5px;
    margin-left: 10px;
    margin-right: 10px;
    width: 95%;
  }
`

export const LeftSubMiddelContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  margin: 0px;
  @media (max-width: 767px) {
    margin-bottom: 0px;
    align-self: flex-start;
    padding: 0px;
  }
`

export const ViewsTextInVI = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #64748b;
  margin-right: 15px;
  font-weight: 500;
`

export const RightSubMiddelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeContainerInVI = styled.button`
  display: flex;
  align-items: center;
  margin-right: 25px;
  border-width: 0px;
  background-color: transparent;
`

export const LikeTextInVI = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isTrue ? '#2563eb ' : '#64748b')};
`

export const Hr = styled.hr`
  width: 97%;
  margin: 0px;
  margin-bottom: 45px;
  border: 1px solid #cbd5e1;
  @media (max-width: 767px) {
    width: 95%;
  }
`

export const BottomContainerInVI = styled.div`
  display: flex;
  width: 97%;
  margin: 0px;
  margin-bottom: 100px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
    width: 95%;
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const ChannelLogoInVI = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 30px;
  align-self: flex-start;
`

export const LeftSubBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`

export const ChannelNameInVI = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#1e293b')};
  margin-bottom: 5px;
  margin-top: 0px;
  font-weight: bold;
`

export const SubscribersText = styled.p`
  font-family: Roboto;
  font-size: 17px;
  color: #64748b;
  margin-bottom: 25px;
`

export const DescriptionInVILg = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#1e293b')};
  margin-top: 0px;
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
`

export const DescriptionInVISm = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#1e293b')};
  margin-top: 0px;
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const LoaderContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 767px) {
    height: 60vh;
  }
`
