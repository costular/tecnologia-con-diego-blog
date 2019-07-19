
export default class ImageGetter {

    static getAbsolutePath(path: string): string {
        return `http://cms.costulartools.es/storage/uploads/${path}`
    }

}