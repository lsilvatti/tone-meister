export interface IOctaveKeyProps { 
    note: string,
    black: boolean,
    name: string,
    handleKeyPressed: (name: string) => void
}

export interface IOctaveKey { 
    note: string,
    black: boolean,
    name: string,
}

export interface IOctaveStyle {
    $black: boolean
}