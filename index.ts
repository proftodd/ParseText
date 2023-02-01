import * as https from 'https'
import { getTopNWords } from './ParseText'

exports.handler = async (event) => {
    const url: string = event.url
    console.log(`retrieving text from [${url}]`)
    const promise = new Promise((resolve, reject) => {
        if (!url) {
            const response = {
                statusCode: 400,
                body: 'url not present in request'
            }
            reject(response)
        } else {
            https.get(url, resp => {
                let data = ''

                resp.on('data', chunk => {
                    console.log(`retrieved chunk of size [${chunk.length}]`)
                    data += chunk
                })

                resp.on('end', () => {
                    console.log(`finished retrieving data`)
                    const top50Words = getTopNWords(data)
                    console.log(`finished counting words`)
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify(top50Words)
                    }
                    resolve(response)
                })
            }).on("error", err => {
                const response = {
                    statusCode: 400,
                    body: `problem processing url [${url}]`
                }
                reject(response)
            })
        }
    })
    return promise
}
