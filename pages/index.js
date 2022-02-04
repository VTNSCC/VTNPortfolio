import Container from "../components/Container"
import {
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

const url = 'https://example.io/'
const title = 'Home'
const description = 'VTN Portfólio.'

export default function Home() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Heading as="h1" size="3xl">Hello, I am Victor Trarbach</Heading>
        <Text fontSize="2xl" my={4}>A developer, creator, and student.</Text>
       
        <Button href="'https://chakra-ui.com'" variant='link' colorScheme="cyan" size="lg" >Hire Me!</Button>
      </Container>
    </>
  )
}
