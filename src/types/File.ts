export type File = {
    id: number;
    name: string;
    url: string;
    type: 'audio' | 'video' | 'image' | 'document' | 'application';
}

export type Folder = {
    id: number;
    title: string;
    type: 'folder';
    content?: (File | Folder)[];
}

export type DynamicStructure = (File | Folder)[];
