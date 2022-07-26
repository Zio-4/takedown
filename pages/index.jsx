/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

 const Index = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)

export default Index

export function getStaticProps() {
  // simulate getting data from CMS

  return {
    props: {
      content: {
        title: 'This is the best note taking app in the multiverse'
      }
    }
  }
}