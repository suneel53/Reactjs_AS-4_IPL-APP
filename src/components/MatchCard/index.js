// Write your code here
import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeam, result, matchStatus, competingTeamLogo} = cardDetails
  const css = matchStatus === 'Won' ? 'col-won' : 'col-lost'
  return (
    <li className="matchcard-cont">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo-image"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={css}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
