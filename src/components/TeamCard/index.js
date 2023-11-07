// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="teamcard-cont">
        <img src={teamImageUrl} alt={name} className="teamcard-logo-image" />
        <p className="teamcard-head">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
