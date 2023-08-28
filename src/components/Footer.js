import { Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Footer = () => {
  const location2 = useLocation()

  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {location2.pathname==='/' && (<Link to="/about">About</Link>)}
    </footer>
  )
}

export default Footer
