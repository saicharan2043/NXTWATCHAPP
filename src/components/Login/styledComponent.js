import styled from 'styled-components'

export const BgContainerLogin = styled.div`
  background-color: ${props => (props.isLightModeOn ? '#181818' : '#ffffff')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${props => (props.isLightModeOn ? '#0f0f0f' : '#ffffff')};
  padding: 45px;
  box-shadow: ${props =>
    props.isLightModeOn ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px'};
  @media (max-width: 767px) {
    width: 90%;
    padding: 30px;
  }
`

export const LogoLogin = styled.img`
  height: 50px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    height: 40px;
    margin-bottom: 20px;
  }
`

export const Label = styled.label`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isLightModeOn ? '#ffffff' : '#475569')};
  align-self: flex-start;
  margin-top: 30px;
  font-weight: 500;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #94a3b8;
  padding: 8px;
  padding-left: 15px;
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isLightModeOn ? '#ffffff' : '#475569')};
  border-radius: 6px;
  margin-top: 8px;
  margin-bottom: 10px;
  align-self: flex-start;
  outline: none;
  background-color: transparent;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-bottom: 15px;
  margin-top: 0px;
`

export const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 7px;
  align-self: center;
`

export const LabelCheckBox = styled.label`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => (props.isLightModeOn ? '#ffffff' : '#475569')};
  align-self: center;
  font-weight: 500;
`

export const ButtonLogin = styled.button`
  width: 100%;
  height: 50px;
  background-color: #3b82f6;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 15px;
  color: #ffffff;
  font-weight: 500;
  border-width: 0px;
  margin-top: 20px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #ff0000;
  margin-top: 15px;
  align-self: flex-start;
`
// export default ColorBrown = styled.p

// .color-brown {
//   background-color: #181818;
// }

// .black-color {
//   background-color: #000000;
// }

// .white-color {
//   color: #ffffff;
// }
