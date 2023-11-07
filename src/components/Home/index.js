// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, iplTeamList: []}

  componentDidMount() {
    this.getIplList()
  }

  getIplList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const listdata = data.teams
    const updatedData = listdata.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({iplTeamList: updatedData, isLoading: false})
    console.log(listdata)
    console.log(updatedData)
  }

  loaderfunction = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  homeView = () => {
    const {isLoading, iplTeamList} = this.state
    console.log(isLoading)
    return (
      <div className="homeview-cont">
        <div className="ipllogo-and-head-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipllogo-image"
          />
          <h1 className="homeview-head">IPL Dashboard</h1>
        </div>
        <ul className="ipl-team-list-cont">
          {iplTeamList.map(each => (
            <TeamCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="main-cont">
        {isLoading ? this.loaderfunction() : this.homeView()}
      </div>
    )
  }
}

export default Home
