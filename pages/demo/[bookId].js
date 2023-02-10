import { useRouter } from 'next/router'

export const getStaticPaths = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const paths= data.map((curEle)=>{
    return {
      params: {
        bookId: curEle.id.toString()
      }
    }
  });
  return {
    paths, 
    fallback: false
  }
}

export const getStaticProps = async(context)=>{
  const id = context.params.bookId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  console.log( context)

  return {
    props:{
      data,
    }
  }
}

const bookId = ({data}) => {
    const router = useRouter()
    // console.log(router);
    const bookNo = router.query.bookId;

  return (
    <div>
      <h1>{data.id}</h1>
      <h2>{data.title}</h2>
   </div>
  )
}

export default bookId