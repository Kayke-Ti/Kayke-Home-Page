import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I m a full stack developer
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kayke Barbosa
          </Heading>
          <p>Developer ( Student / Enthusiastic / Analyst )</p>    
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/eu.jpg"
              alt="Profile image"
              borderRadius="50%"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
         <Paragraph>
          Speak dev, my name is Kayke I am a software developer, 
          I am also a tech fanatic I like to learn new things 
          every day and love helping people through programming! 
          I ve been in technology for three years plus ever evolution.
          I have already developed projects where they were winners of 
          gymkhanas of the institution where I was a technician.{'  '}
          <Link as={NextLink} href="https://github.com/Kayke-Ti?tab=following" passHref scroll={false}>
            Projects
          </Link>
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Sobral-CE, Ceará.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Having completed the technical course in informatics,
          with a specialization in full-stack development, being 
          formed by the institution <Link href='https://www.crede06.seduc.ce.gov.br/2019/10/03/eeep-gerardo-jose-dias-de-loiola/'>EEEP Gerardo José Dias de Loiola</Link>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Having curricular internship at Grendene Company, 
          having played the role of software developer and data analyst.
        </BioSection>
      </Section>

      <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
          I 🤍
        </Heading>
        <Paragraph>
        Movies, Music,{'  '}
        <Link href='https://g1.globo.com/tecnologia/'>Technology</Link>
        , Games, Study, <Link href='https://megaflix.co/'>Watch{' '}</Link> 
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        My networks
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Kayke-Ti" target="_blank">
              <Button 
              variant="ghost" 
              colorScheme="teal" 
              leftIcon={<IoLogoGithub />}>
               @Kayke-Ti
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/kayke-barbosa-15a96023a" target="_blank">
              <Button 
              variant="ghost" 
              colorScheme="teal" 
              leftIcon={<IoLogoLinkedin />}>
               @Kayke Barbosa
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/kaykee_bl?igshid=ZDdkNTZiNTM=" target="_blank">
              <Button 
              variant="ghost" 
              colorScheme="teal" 
              leftIcon={<IoLogoInstagram />}>
               @Kaaykee_bl
               </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/posts"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Popular posts
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
