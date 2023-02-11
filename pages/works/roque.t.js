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
    <Layout title="Roque.t">
    <Container>
      <Title>
        Roque.t <Badge>2021-</Badge>
      </Title>
      <P>
      Rocket.Q is an interaction application through questions, 
      making it possible to create a room for anonymous Internet 
      users to ask questions and the creator of the room, in possession of a password,
       manage these questions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Kayke-Ti/Rocket.Q">
          https://github.com/Kayke-Ti/Rocket.Q/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/LinuxAndroid</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, JAVASCRIPT, EJS, SQLITE, NODE JS</span>
        </ListItem>

        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
          Rock. t is an anonymous room of questions being generated by the room admin, 
          being directed to the users of the room <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/roque.png" alt="Roque.t" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'