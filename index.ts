import * as https from 'https'
import { getTopNWords } from './ParseText'

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME')
    process.exit(1)
}

let url: string = process.argv[2]
https.get(url, resp => {
    let data = ''

    resp.on('data', chunk => {
        data += chunk
    })

    resp.on('end', () => {
        console.log(getTopNWords(data))
    })
}).on("error", err => {
    console.log("Error: " + err.message)
})
