import PianoA from 'assets/sound/piano/A.mp3';
import PianoAb from 'assets/sound/piano/Ab.mp3';
import PianoB from 'assets/sound/piano/B.mp3';
import PianoBb from 'assets/sound/piano/Bb.mp3';
import PianoC from 'assets/sound/piano/C.mp3';
import PianoD from 'assets/sound/piano/D.mp3';
import PianoDb from 'assets/sound/piano/Db.mp3';
import PianoE from 'assets/sound/piano/E.mp3';
import PianoEb from 'assets/sound/piano/Eb.mp3';
import PianoF from 'assets/sound/piano/F.mp3';
import PianoG from 'assets/sound/piano/G.mp3';
import PianoGb from 'assets/sound/piano/Gb.mp3';
import { IOctaveKey } from 'components/OctaveKey/types';



const octave:Array<IOctaveKey> = [
    {
        name: "C",
        note: PianoC,
        black: false
    },
    {
        name: "Db",
        note: PianoDb,
        black: true
    },
    {
        name: "D",
        note: PianoD,
        black: false
    },
    {
        name: "Eb",
        note: PianoEb,
        black: true
    },
    {
        name: "E",
        note: PianoE,
        black: false
    },
    
    {
        name: "F",
        note: PianoF,
        black: false
    },
    {
        name: "Gb",
        note: PianoGb,
        black: true
    },
    {
        name: "G",
        note: PianoG,
        black: false
    },
    {
        name: "Ab",
        note: PianoAb,
        black: true
    },
    {
        name: "A",
        note: PianoA,
        black: false
    },
    {
        name: "Bb",
        note: PianoBb,
        black: true
    },
    {
        name: "B",
        note: PianoB,
        black: false
    }
]

export  { octave }