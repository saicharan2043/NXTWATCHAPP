import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 130vh;
  width: 79%;
  overflow: auto;
  padding: 0px;
  background-color: ${props => (props.isLightModeOn ? '#181818' : '#f9f9f9')};
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 40vh;
  padding-top: 30px;
`

export const BannerSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LogoOfBanner = styled.img`
  height: 35px;
  width: 150px;
  margin-bottom: 5px;
`
export const TextOfBanner = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #181818;
  margin-bottom: 40px;
  margin-top: 15px;
  width: 70%;
  font-weight: 400;
`

export const ButtonOfBanner = styled.button`
  width: 120px;
  height: 45px;
  border: 1px solid #181818;
  border-radius: 4px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 15px;
  color: #181818;
  background-color: transparent;
`

export const HideButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  padding: 0px;
  display: flex;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  padding: 0px;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 25px;
  @media (max-width: 576px) {
    margin-left: 0px;
    justify-content: center;
  }
`

export const InputSearch = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid ${props => (props.isLightModeOn ? '#383838' : '#94a3b8')};
  border-radius: 1px;
  padding: 8px;
  padding-left: 10px;
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isLightModeOn ? '#ebebeb' : '#475569')};
  outline: none;
  margin: 0px;
  background-color: transparent;
  @media (max-width: 576px) {
    width: 270px;
  }
`

export const SearchIconContainer = styled.button`
  width: 90px;
  height: 40px;
  background-color: ${props => (props.isLightModeOn ? '#909090' : '#ebebeb')};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.isLightModeOn ? '#383838' : '#94a3b8')};
  border-radius: 1px;
  margin: 0px;
  border-width: 0px;
  cursor: pointer;
  @media (max-width: 576px) {
    width: 60px;
  }
`

export const UnOrderVideosListHome = styled.ul`
  display: flex;
  padding: 0px;
  margin-left: 25px;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 567px) {
    margin-left: 0px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`

export const ResponseFailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 100vh;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 15px;
  }
`

export const ImgFailure = styled.img`
  height: 300px;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    height: 200px;
  }
`

export const HeadingFailed = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#000000')};
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 25px;
  }
`

export const DescriptionFailed = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #475569;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`
export const Retry = styled.button`
  width: 120px;
  height: 50px;
  background-color: #4f46e5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 15px;
  color: #ffffff;
  border-radius: 5px;
  border-width: 0px;
  font-weight: 500;
`
