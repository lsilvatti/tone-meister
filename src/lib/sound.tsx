function playSound(sound: string) {
    const audioNote = new Audio(sound);
    audioNote.play();
}

export { playSound }