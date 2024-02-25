import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import '../css/notfound.css'

export default function NotFound() {



  return (
    <div className='notFound'>
      <div className='notFoundMessage'>
        <h2 className='error404_h2'>Error 4<FontAwesomeIcon icon={faEarth} />4</h2>
        <p className='notFound_p'>I'm sorry m'lord, nothing to be found in the dusty abyss of space!</p>
        <Link to="/" className='goBackLink'>Go back to Eearth!</Link>
      </div>
    </div>
  );
}
