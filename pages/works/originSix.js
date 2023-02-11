import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
  return (
    <Layout title="OriginSix">
      <Container>
        <Title>
        OriginSix <Badge>2021</Badge>
        </Title>
        <P>
        OriginSix is an institutional page in the one page format, responsive, 
        to use in various types of micro, small and medium enterprises.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://site-origin-six-jl3f.vercel.app/'>
            https://site-origin-six-jl3f.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/Android</span>
          </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, JAVASCRIPT</span>
          </ListItem>
          
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href='https://site-origin-six-jl3f.vercel.app/'>
          Project developed during rocketseat programming marathon, 
          creating a system for a beauty salon. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      
      <WorkImage src="/images/works/origin.png" alt="OrinSix" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'