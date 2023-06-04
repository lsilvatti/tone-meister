import React, { useState } from 'react'

import OctaveKey from 'components/OctaveKey/OctaveKey'

import Style from './style'

import { octave } from './constants'
import { IKeyBoard } from './types'

function KeyBoard({handleKeyPressed} : IKeyBoard) {
  return (
      <Style.KeyBoard>
       {octave.map((element, index) => {
          return (
            <OctaveKey handleKeyPressed={handleKeyPressed} key={element.name} black={element.black} note={element.note} name={element.name} />
          )
       })}
    </Style.KeyBoard>
  )
}

export default KeyBoard