import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container } from 'reactstrap'
import { Menu } from '../components/Menu'

export default () => (
  <>
    <Head>
      <title>Jošt z Einsiedle a na Týřově</title>
    </Head>
    <Menu />
    <Container fluid />
  </>
)