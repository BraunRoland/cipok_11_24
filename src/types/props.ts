import type { Dispatch, SetStateAction } from "react"
import type { Cipo } from "./types"

export type navbarProps = {
    setOldal: Dispatch<SetStateAction<'index' | 'mod' | 'admin'>>
}

export type cardProps = {
    cipo: Cipo
    view: 'index' | 'mod' | 'admin'
    setFormCipo?: Dispatch<SetStateAction<Cipo>>
}

export type oldalProps = {
    cipok: Cipo[]
    view: 'index' | 'mod' | 'admin'
    changeCount: number
    setChangeCount: Dispatch<SetStateAction<number>>
}

export type formProps = {
    formCipo: Cipo,
    setFormCipo: Dispatch<SetStateAction<Cipo>>
}