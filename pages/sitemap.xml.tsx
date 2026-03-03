import {
  menuCs,
  menuDe,
  menuEn,
  otherCs,
  otherDe,
  otherEn,
} from '../shared/sitemap'
import type { GetServerSidePropsContext } from 'next'

const generateSiteMap = () =>
  `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${menuCs
       .concat(menuEn, menuDe, otherCs, otherEn, otherDe)
       .map(({ href }) => `<url><loc>https://tyrovsti.cz${href}</loc></url>`)
       .join('')}
   </urlset>
 `

const Page = () => {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps = ({ res }: GetServerSidePropsContext) => {
  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(generateSiteMap())
  res.end()

  return {
    props: {},
  }
}

export default Page
