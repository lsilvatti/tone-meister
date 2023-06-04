import React, { useEffect } from 'react'
import { IOctaveKeyProps } from './types'

import Style from './style';

function OctaveKey({name = "", note = "", black = true, handleKeyPressed}:IOctaveKeyProps) {
    const playNote = () => {
      const noteAudio = new Audio(note);
        noteAudio.play();
        handleKeyPressed(name);
    }

  return (
    <Style.ScaleKey onClick={() => playNote()} $black={black}>
      {name}
    </Style.ScaleKey>
  )
}

export default OctaveKey