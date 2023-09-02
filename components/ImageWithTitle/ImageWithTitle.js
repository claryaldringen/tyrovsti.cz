import { Col } from 'reactstrap'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export const ImageWithTitle = ({ md, src, width, height, title }) => (
  <Col md={md} className="image-wrapper">
    <Link href={`/images/${src}`} target="_blank">
      <Image
        src={`/images/${src}`}
        width={width}
        height={height}
        alt={title}
        className="fit"
      />
    </Link>
    <br />
    {title}
  </Col>
)
