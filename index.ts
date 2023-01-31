import * as fs from 'fs'
import { getTopNWords } from './ParseText'

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME')
    process.exit(1)
}

let filename: string = process.argv[2]
fs.readFile(filename, 'utf-8', (err: NodeJS.ErrnoException, data: string) => {
    if (err) throw err
    console.log(getTopNWords(data))
})