import React from 'react'

import Typo from 'components/Typo'

import css from './styles.scss'

export default function App() {
  return (
    <div className={css.App}>
      <Typo type="h1">
        <h2>Rollup and react ⚛️🚀</h2>
      </Typo>
    </div>
  )
}
