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
    <Layout title="Doctorcare">
    <Container>
      <Title>
        DoctorCare <Badge>2021-</Badge>
      </Title>
      <P>
      DoctorCare is an institutional page in One Page format, responsive, to be used 
      in different types of micro, small and medium-sized companies. Contains the 
      following sections
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://doctocaremed.vercel.app/">
          https://doctocaremed.vercel.app/ <ExternalLinkIcon mx="2px" />
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
          Doctorcare is a medical clinic project for both web and mobile, 
          with a simple layout but with a visual differential<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/doctorcare.jpg" alt="Doctorcare" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'