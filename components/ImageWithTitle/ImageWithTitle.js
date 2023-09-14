import { Col } from 'reactstrap'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const extractString = (el) => {
  let str = ''
  if (typeof el == 'string') {
    return el
  } else if (el?.props) {
    if (Array.isArray(el.props.children)) {
      str = el.props.children.map((child) => extractString(child)).join('')
    } else {
      str = extractString(el.props.children)
    }
  }
  return str
}

export const ImageWithTitle = ({ md, src, width, height, title, href }) => (
  <Col md={md} className="image-wrapper">
    <Link href={href ? `/images/${href}` : `/images/${src}`} target="_blank">
      <Image
        src={`/images/${src}`}
        width={width}
        height={height}
        alt={extractString(title)}
        className="fit"
      />
    </Link>
    <br />
    {title}
  </Col>
)
