import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  width: 21%;
  min-height: 130vh;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: ${props => (props.isLightModeOn ? '#212121' : '#ffffff')};
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 15px;
`

export const ContactUsText = styled.p`
  font-size: 20px;
  font-family: Roboto;
  color: ${props => (props.isLightModeOn ? '#f1f5f9' : '#1e293b')};
  margin-bottom: 15px;
  font-weight: bold;
`

export const ContainerOfSocialMedia = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-top: 15px;
  align-items: center;
`

export const LogoOfSocialMedia = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
`

export const Description = styled.p`
  font-size: 20px;
  font-family: Roboto;
  color: ${props => (props.isLightModeOn ? '#f1f5f9' : '#1e293b')};
  width: 100%;
  line-height: 30px;
`
