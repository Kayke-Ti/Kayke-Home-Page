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
    <Layout title="Doctor">
    <Container>
      <Title>
        Doctor-Strange <Badge>2023-</Badge>
      </Title>
      <P>
      Website was based on an art in Figma, on a Marvel character Doctor Strange.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Kayke-Ti/Landing-Page">
          https://github.com/Kayke-Ti/Landing-Page <ExternalLinkIcon mx="2px" />
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
          <Link href="">
          Recreated website about a figma art <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/doctorStrange.png" alt="Doctor-Stange" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'