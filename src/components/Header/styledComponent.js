import styled from 'styled-components'

export const NavBarLg = styled.nav`
  display: block;
  height: 15vh;
  background-color: ${props => (props.isLightModeOn ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 0px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoNavLg = styled.img`
  height: 40px;
  align-self: center;
`

export const SubContainerNavLg = styled.div`
  display: flex;
  align-self: center;
`

export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 40px;
  align-self: center;
`

export const LogOutBtn = styled.button`
  width: 100px;
  height: 40px;
  border: 2px solid ${props => (props.isLightModeOn ? '#ffffff' : '#3b82f6')};
  border-radius: 5px;
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.isLightModeOn ? '#ffffff' : '#3b82f6')};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: transparent;
  font-weight: 500;
  cursor: pointer;
`

export const NavBarSuperSm = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
    background-color: ${props => (props.isLightModeOn ? '#212121' : '#ffffff')};
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
`

export const NavBarSubSm = styled.div`
  width: 100%;
  padding: 25px;
  padding-left: 25px;
  padding-right: 10px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogNavSm = styled.img`
  height: 25px;
`

export const SubContainerNavSm = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
`

export const HideButton = styled.nav`
  background-color: transparent;
  border-width: 0px;
  padding: 0px;
  display: flex;
  cursor: pointer;
  @media (max-width: 576px) {
    cursor: none;
  }
`

export const UnOrderListTabs = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding-left: 20px;
  width: 100%;
`

export const ListTabs = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 0px;
  padding: 0px;
`

export const NameTab = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isLightModeOn ? '#f1f5f9' : '#475569')};
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isLightModeOn ? '#212121' : '#ffffff')};
  height: 200px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  @media (max-width: 567px) {
    width: 300px;
    height: 180px;
    padding: 20px;
  }
`

export const HeadingPopup = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => (props.isLightModeOn ? '#ffffff' : '#475569')};
  margin-bottom: 50px;
  @media (max-width: 567px) {
    font-size: 15px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const ButtonPopup = styled.button`
  width: 100px;
  height: 45px;
  border: 1px solid ${props => (props.isLightModeOn ? '#ffffff' : '#475569')};
  border-radius: 5px;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isLightModeOn ? '#ffffff' : '#475569')};
  margin-right: 40px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 567px) {
    margin-right: 15px;
    margin-left: 15px;
    width: 80px;
    height: 40px;
  }
`

export const ButtonConfirm = styled.nav`
  width: 100px;
  height: 45px;
  border-width: 0px;
  border-radius: 5px;
  display: flex;
  background-color: #3b82f6;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 15px;
  color: #ffffff;
  margin-right: 40px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 567px) {
    margin-right: 15px;
    margin-left: 15px;
    width: 80px;
    height: 40px;
  }
`
