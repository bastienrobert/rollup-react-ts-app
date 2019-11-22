import React from 'react'
import classnames from 'classnames/bind'

import css from './styles.scss'

const cx = classnames.bind(css)

interface TypoProps {
  children: any
  className?: string
  type?: string
}

export default function Typo({ children, className, type }: TypoProps): any {
  const childrenStyle = cx(css.default, className, type)

  return React.Children.map(children, (child: any) => {
    return React.cloneElement(child, {
      className: cx(child.props.className, childrenStyle)
    })
  })
}
