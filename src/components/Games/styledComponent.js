import styled from 'styled-components'

export const BgContainerGames = styled.div`
  display: flex;
`

export const ContainerGames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130vh;
  overflow: auto;
  width: 79%;
  padding: 0px;
  margin-top: 0px;
  background-color: ${props => (props.isLightModeOn ? '#0f0f0f ' : '#f9f9f9')};
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    height: 100vh;
  }
`

export const GamingContainer = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  padding: 20px;
  padding-left: 50px;
  margin: 0px;
  margin-bottom: 50px;
  background-color: ${props => (props.isLightModeOn ? '#181818 ' : '#ebebeb')};
  @media (max-width: 767px) {
    height: 15vh;
    margin-bottom: 20px;
  }
  @media (max-width: 567px) {
    padding-left: 20px;
  }
`

export const IconGameContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLightModeOn ? '#000000 ' : '#d7dfe9')};
  margin-right: 25px;
  @media (max-width: 767px) {
    height: 60px;
    width: 60px;
  }
`

export const GamingHeading = styled.h1`
  font-family: Roboto;
  font-size: 35px;
  color: ${props => (props.isLightModeOn ? '#d7dfe9 ' : '#181818')};
  @media (max-width: 767px) {
    font-size: 25px;
  }
`

export const UnOrderGamesList = styled.ul`
  display: flex;
  width: 90%;
  margin-left: 20px;
  flex-wrap: wrap;
  padding: 0px;
  align-items: center;
  @media (max-width: 767px) {
    margin: 0px;
    width: 100%;
    padding-top: 5px;
    padding-right: 0px;
    height: 100vh;
    margin-bottom: 0px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  @media (max-width: 576px) {
    height: 100vh;
  }
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
  @media (max-width: 576px) {
    height: 100vh;
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
