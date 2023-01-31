function getTopNWords(text: string, count: number = 50): string[] {
    let words = text.split(/\s+/)
        .map(word => word.toLowerCase())
        .reduce((acc, el) => {
            if (acc[el]) {
                acc[el]++
            } else {
                acc[el] = 1
            }
            return acc
        }, {})
    let kvPairs: [string, number][] = Object.entries(words)
    kvPairs.sort((a,b) => b[1] - a[1])
    return kvPairs
        .slice(0, count)
        .map(kv => kv[0])
}

export { getTopNWords }
