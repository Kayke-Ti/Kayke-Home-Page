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
    <Layout title="Habits">
    <Container>
      <Title>
        Habits <Badge>2023-</Badge>
      </Title>
      <P>
        Habits is a project with the aim of marking daily habits done in the day, later adding a new habit
        encrypted data sync support.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://maykbrito.github.io/nlw-setup/">
          https://maykbrito.github.io/nlw-setup/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/iOS/Android</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5, CSS3, JAVASCRIPT</span>
        </ListItem>

        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
          Damage credits for this project Made with ♥ by Rocketseat 👋 Join our community! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/habits.jpg" alt="Habits" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'