import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const ResumeEn = ({ setLanguage }) => {

  const history = useHistory()

  useEffect(() => {
    setLanguage('en')
    history.push('/resume')
  });

  return (
    <h5>redirecting</h5>
  )

}
 
export default ResumeEn;