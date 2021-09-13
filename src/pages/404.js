import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = ({language}) => {

  const history = useHistory()

  useEffect(() => {
    setTimeout(() => history.push('/'), 6000)
  }, [history])

  return ( 
    <div className="text-white text-center pt-9">
      <h2 className="text-8xl">404</h2>
      { language.notFound }
    </div>
  );
}
 
export default NotFound;