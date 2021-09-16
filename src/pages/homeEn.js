import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const HomeEn = ({ setLanguage }) => {

  const history = useHistory()

  useEffect(() => {
    setLanguage('en')
    history.push('/')
  });

  return (
    <h5>redirecting</h5>
  )

}
 
export default HomeEn;