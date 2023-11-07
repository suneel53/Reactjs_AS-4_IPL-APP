// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, team: {}}

  componentDidMount() {
    this.getdetails()
  }

  getdetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        id: each.id,
        date: each.data,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
    }
    console.log(updatedData)
    this.setState({isLoading: false, team: updatedData})
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  teamMatchesView = () => {
    const {isLoading, team} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = team
    console.log(isLoading)
    return (
      <div className="teammatches-cont">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <p className="latestmatches-head">Latest Matches</p>
        <LatestMatch details={latestMatchDetails} />
        <ul className="match-cards-list-cont">
          {recentMatches.map(each => (
            <MatchCard key={each.id} cardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="teammatches-main-cont">
        {isLoading ? this.loader() : this.teamMatchesView()}
      </div>
    )
  }
}

export default TeamMatches
