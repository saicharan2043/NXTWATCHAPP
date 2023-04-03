import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Games from './components/Games'
import Home from './components/Home'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItem from './components/VideoItem'
import Login from './components/Login'
import ProtectedRouter from './ProtectedRouter'
import NotFound from './components/NotFound'

import AllContext from './context/AllContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {SavedList: [], isLightModeOn: false, isSaveIconActive: false}

  clickLightModeBtn = () => {
    this.setState(privwesValue => ({
      isLightModeOn: !privwesValue.isLightModeOn,
    }))
  }

  clickSavedIcon = list => {
    const {SavedList} = this.state
    if (SavedList.length === 0) {
      this.setState({SavedList: [list]})
    } else {
      const updatedList = SavedList.filter(echValue => echValue.id !== list.id)
      if (updatedList.length === SavedList.length) {
        this.setState(privwesValue => ({
          SavedList: [...privwesValue.SavedList, list],
        }))
      } else {
        this.setState({SavedList: updatedList})
      }
    }
  }

  render() {
    const {SavedList, isLightModeOn} = this.state
    console.log(isLightModeOn)
    return (
      <AllContext.Provider
        value={{
          SavedList,
          isLightModeOn,
          clickLightModeBtn: this.clickLightModeBtn,
          clickSavedIcon: this.clickSavedIcon,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRouter exact path="/" component={Home} />
          <ProtectedRouter exact path="/gaming" component={Games} />
          <ProtectedRouter exact path="/trending" component={Trending} />
          <ProtectedRouter exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRouter exact path="/videos/:id" component={VideoItem} />
          <Route component={NotFound} />
        </Switch>
      </AllContext.Provider>
    )
  }
}

export default App
