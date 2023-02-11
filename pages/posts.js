import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbTh from '../public/images/contents/th.jpg'
import thumbTh1 from '../public/images/contents/th1.jpg'
import thumbTh2 from '../public/images/contents/th3.jpg'
import thumbTh3 from '../public/images/contents/th4.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading  as="h3" fontSize={20} mb={4}>
      Posts I Like
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1,2,2]} gap={6}>
          <GridItem title="How to be a Quality Programmer"
          thumbnail={thumbTh}
          href="https://r.search.yahoo.com/_ylt=AwrNOnCEXuJjxlEXVp7.6Qt.;_ylu=c2VjA2ZwLWF0dHJpYgRzbGsDcnVybA--/RV=2/RE=1675808516/RO=11/RU=https%3a%2f%2fblog.bighouseweb.com.br%2flinguagens-de-programacao%2f/RK=2/RS=EInVy8jUY3LcfqHqCl6v0RRGYwQ-"
          />
          <GridItem title="Evolution of Programming over time"
          thumbnail={thumbTh1}
          href="https://r.search.yahoo.com/_ylt=AwrEqya5YOJj4eoXQA_.6Qt.;_ylu=c2VjA2ZwLWF0dHJpYgRzbGsDcnVybA--/RV=2/RE=1675809081/RO=11/RU=https%3a%2f%2fdicasdeprogramacao.com.br%2fcategoria%2fdicas-de-programacao%2fpage%2f3%2f/RK=2/RS=88kyKvNj0LfC2uoANqsheSTRGMA-"
          />
          <GridItem title="Software Developers"
          thumbnail={thumbTh3}
          href="https://r.search.yahoo.com/_ylt=AwrFFHVPYeJj5iINfgvz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1675809232/RO=10/RU=https%3a%2f%2fwww.vagas.com.br%2fcargo%2fsoftware-developer/RK=2/RS=LiSx58hNPNMFQUqIGDkzcAInAYA-"
          />
          <GridItem title="How to Master Various Web Technologies"
          thumbnail={thumbTh2}
          href="https://r.search.yahoo.com/_ylt=AwrFfbC7YeJj2c8MO_Pz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzQEdnRpZAMEc2VjA3Ny/RV=2/RE=1675809340/RO=10/RU=https%3a%2f%2fblog.umbler.com%2fbr%2fferramentas-para-desenvolvedores-da-web%2f/RK=2/RS=YPJlO9Dp_GZAeBHh19UR5G89gPE-"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'