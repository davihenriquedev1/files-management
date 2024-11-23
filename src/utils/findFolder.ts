import { DynamicStructure, Folder } from "../types/File";

export const findFolder = (segments: string[], currentFolder:DynamicStructure): Folder | null => {
    const [currentSegment, ...restOfSegments] = segments;

    // procura a pasta correspondente ao segmento atual
    const nextFolder = currentFolder.find(
        (item): item is Folder => item.type === 'folder' && item.title === currentSegment
    );

    if(!nextFolder) {
        return null; // Não encontrou a pasta, retorna null
    }
    if(restOfSegments.length  === 0 ) {
        return nextFolder; // Encontrou o final da hierarquia
    }

    // Chama recursivamente para o próximo nível de pasta
    return findFolder(restOfSegments, nextFolder.content ?? []);
}
