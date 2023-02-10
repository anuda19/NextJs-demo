import { useRouter } from 'next/router'
import { useEffect } from 'react';


const Error = () => {
    const router = useRouter()

    const handleBack = () =>{
        setTimeout(() => {
            router.push('/')
        }, 5000);
    }

    useEffect(() => {
        handleBack()
    }, [])
  return (
    <div>
        <h1>We are sorry we couldn't find this url</h1>
        <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default Error