import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHabits from '../public/images/works/habits.jpg'
import thumbOrigin from '../public/images/works/origin.png'
import thumbCoffeeDelivery from '../public/images/works/coffedelivery.png'
import thumbDoctorcare from '../public/images/works/doctorcare.jpg'
import thumbPikachu from '../public/images/works/pikachu.png'
import thumbDoctorStrange from '../public/images/works/doctorStrange.png'
import thumbRoque from '../public/images/works/roque.png'

const Works = () => (
  <Layout>
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>
    <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem id="habits" title="Habits" thumbnail={thumbHabits}>
        Habits is an app to help track habits , done during the day.
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="originSix" title="OriginSix" thumbnail={thumbOrigin}>
        OriginSix is an institutional page in the one page format, responsive, 
        to use in various types of micro, small and medium enterprises.
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="pikachu" title="Pikachu" thumbnail={thumbPikachu}>
        Habits is an app to help track habits , done during the day.
        </WorkGridItem>
      </Section>
      <Section delay={0.2}>
        <WorkGridItem id="doctor" title="Doctor-Strange" thumbnail={thumbDoctorStrange}>
        A thrilling ride through the Multiverse with Doctor Strange, his trusted friend 
        Wong and Wanda Maximoff aka the Scarlet Witch.
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="doctorcare" title="Doctorcare" thumbnail={thumbDoctorcare}>
        DoctorCare is an institutional page in One Page format, responsive, to be used 
        in different types of micro, small and medium-sized companies. Contains the 
        following sections: Header, Navigation, Home, About, Services and Footer.
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    <Section delay={0.4}>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
      Old works
      </Heading>
    </Section>
    <SimpleGrid columns={[1,1,2]} gap={6}>
    
    <Section delay={0.3}>
        <WorkGridItem id="coffee" title="Coffee-Delivery" thumbnail={thumbCoffeeDelivery}>
        Coffee-delivery is an online coffee sales system, with sales in mind.
        </WorkGridItem>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem id="roque.t" title="Roque.t" thumbnail={thumbRoque}>
        Rocket.Q is an interaction application through questions, being 
        possible to create a room for anonymous Internet users to ask 
        questions and the creator of the room in possession of a password 
        to manage these questions and mark them as read.
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
