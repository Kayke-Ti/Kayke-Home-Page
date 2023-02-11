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
        Pikachu <Badge>2022-</Badge>
      </Title>
      <P>
        Landing page of the character Pikachu, in order to train Flex-Box in Css
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Kayke-Ti/PIKACHU">
          https://github.com/Kayke-Ti/PIKACHU <ExternalLinkIcon mx="2px" />
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
          Project developed in order to train css with flex-box, recreated from figman for web. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/pikachu.png" alt="Pikachu" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'