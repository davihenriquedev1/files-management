export type Image = {
    id: number,
    name: string,
    url: string
}

export type Album = {
    id: number,
    title: string,
    photos: Image[]
}
