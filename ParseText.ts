let excludedWords: string[] = [
    'the','of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was',
    'for', 'on', 'are', 'with', 'as', 'i', 'his', 'they', 'be', 'at', 'one', 'have',
    'this', 'from', 'or', 'had', 'by', 'not', 'word', 'but', 'what', 'some', 'we',
    'can', 'out', 'other', 'were', 'all', 'there', 'when', 'up', 'use', 'your',
    'how', 'said', 'an', 'each', 'she'
]

function getTopNWords(text: string, count: number = 50, exclude: string[] = excludedWords): string[] {
    let words = text.split(/\s+/)
        .map(word => word.toLowerCase())
        .filter(word => !exclude.includes(word))
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
