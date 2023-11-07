// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = details
  return (
    <div className="latest-match-cont">
      <div className="latest-match-details-cont1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latest-match-logo"
      />
      <div className="latest-match-details-cont1">
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
        </div>
        <div>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
        </div>
        <div>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
        </div>
        <div>
          <p>Umpire</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
