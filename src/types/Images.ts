export type Image = {
    id: number,
    url: string
}

export type Album = {
    id: number,
    title: string,
    photos: Image[]
}