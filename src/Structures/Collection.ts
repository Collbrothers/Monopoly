

export class Collection<T,E> extends Map<T,E> {
    /**
     * @returns Array<Element> | Element
     * @param fn {Function}
     */
    find(fn: Function) {
        for(const [key,value] of this) {
            //@ts-ignore
            try {
        if(fn(value)) return value
            }catch(e) {continue}
            }
         
           return null
    }
}
