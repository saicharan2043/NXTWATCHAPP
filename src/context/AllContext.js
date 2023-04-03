import React from 'react'

const AllContext = React.createContext({
  isLightModeOn: false,
  clickLightModeBtn: () => {},
  SavedList: [],
  clickSavedIcon: () => {},
})

export default AllContext
