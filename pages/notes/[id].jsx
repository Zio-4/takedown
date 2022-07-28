/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Page = ({ note }) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}
  
export default Page

export async function getServerSideProps({params, req, res}) {

  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)
  
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' }).end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}