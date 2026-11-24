import type { Dispatch, SetStateAction } from "react"
import type { Cipo } from "./types"

export type navbarProps = {
    setOldal: Dispatch<SetStateAction<'index' | 'mod' | 'admin'>>
}

export type cardProps = {
    cipo: Cipo
}

export type oldalProps = {
    cipok: Cipo[]
}
