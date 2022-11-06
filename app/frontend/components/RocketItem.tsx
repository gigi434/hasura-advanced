import { Rocket } from '../types/types'

interface RocketItemProps {
  rocket: Rocket
}

const RocketItem = ({ rocket }: RocketItemProps) => {
  return (
    <li key={rocket.id}>
      <p className="my-3 font-bold">{rocket.name}</p>
      <span>
        {'->'}
        {rocket.mass.kg}
        {'[kg] '}
        {rocket.height.meters}
        {'[m] '}
        {rocket.diameter.meters}
        {'[m] '}
      </span>
    </li>
  )
}

export default RocketItem
