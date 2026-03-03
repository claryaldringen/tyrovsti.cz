import { Col, ColProps } from 'reactstrap'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Link from 'next/link'

const extractString = (el: ReactNode): string => {
  let str = ''
  if (typeof el == 'string') {
    return el
  } else if (React.isValidElement<{ children?: ReactNode }>(el)) {
    if (Array.isArray(el.props.children)) {
      str = el.props.children
        .map((child: ReactNode) => extractString(child))
        .join('')
    } else {
      str = extractString(el.props.children)
    }
  }
  return str
}

interface ImageWithTitleProps {
  md?: ColProps['md']
  src: string
  width: number
  height: number
  title?: ReactNode
  href?: string
}

export const ImageWithTitle = ({
  md,
  src,
  width,
  height,
  title,
  href,
}: ImageWithTitleProps) => (
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
