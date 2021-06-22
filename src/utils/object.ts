type ForEachCallback<TObj, TKey = keyof TObj> = ( key: TKey, value: TObj[ keyof TObj], obj: TObj ) => void
export function each<TObj>( obj: TObj, callback: ForEachCallback<TObj> ): void {
    Object.entries( obj ).forEach( ( [ key, value ]: [ string, TObj[ keyof TObj]] ) => { callback( key as keyof TObj, value, obj )} );
}
