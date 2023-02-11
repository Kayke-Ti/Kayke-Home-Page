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
    <Layout title="Coffe-Delivery">
    <Container>
      <Title>
        Coffee-Delivery <Badge>2022-</Badge>
      </Title>
      <P>
      The application has 3 screens, the first being a presentation screen and also a list of available coffees. 
      On the second screen, the user needs to fill in a form with his address data and on the right side it is 
      possible to view the items in the cart, being able to change the quantity or remove it. On the third and final screen,
       an order confirmation is displayed and also the delivery details of the purchase.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://coffee-delivery-livid.vercel.app/">
          https://coffee-delivery-livid.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux/iOS/Android</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite, Styled Components, Local Storage, Typescript, Context API ,React Router Dom, React Hook Form</span>
        </ListItem>

        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="">
          Coffee-delivery is an online coffee sales system, with sales in mind.<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      
      <WorkImage src="/images/works/coffedelivery.png" alt="Coffe-Delivery" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'