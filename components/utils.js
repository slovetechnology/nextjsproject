import qs from 'query-string'


export function FormUrlQuery({ params, key, value, keysToRemove }) {
    const currentUrl = qs.parse(params)

    if(keysToRemove?.length > 0) {
        keysToRemove.map((keyToRemove) => {
            delete currentUrl[keyToRemove]
        })
    }else {
        currentUrl[key] = value
    }
    return qs.stringifyUrl(
        { url: window.location.pathname, query: currentUrl },
        {skipNull: true}
    )
}