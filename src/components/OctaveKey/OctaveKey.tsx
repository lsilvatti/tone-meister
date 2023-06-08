import React, { useEffect } from 'react'
import { IOctaveKeyProps } from './types'
import { playSound } from 'lib/sound'

import Style from './style';

function OctaveKey({name = "", note = "", black = true, handleKeyPressed}:IOctaveKeyProps) {
    const playNote = () => {
        playSound(note);
        handleKeyPressed(name);
    }

  return (
    <Style.ScaleKey onClick={() => playNote()} $black={black}>
      {name}
    </Style.ScaleKey>
  )
}

export default OctaveKey