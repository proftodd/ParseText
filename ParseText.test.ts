import { getTopNWords } from './ParseText'

describe('parse text', () => {
    let text = `
Lorem ipsum dolor sit amet. Et inventore consequatur qui incidunt consequuntur ut blanditiis blanditiis aut unde omnis et voluptatem galisum sed dolor temporibus ut voluptatem atque. Ab distinctio molestiae aut mollitia maxime qui mollitia vitae nam magnam nihil. In error cumque id nihil reprehenderit in suscipit voluptatum et inventore modi ut aperiam illum et quia eaque. Est odit laudantium sit blanditiis maxime sit sequi placeat At dolore galisum et enim quaerat.
Et magni quia est dicta excepturi ab deleniti optio et earum quis 33 laudantium sunt eos asperiores doloremque id repudiandae praesentium. Ut distinctio galisum est molestiae reprehenderit in dolorum quam sed aliquid architecto qui enim enim. Id dicta voluptas ut accusantium numquam et deleniti animi! Non animi deleniti est sunt voluptatem ex voluptatem molestiae est quas voluptatibus!
Vel temporibus quia a praesentium quia eum nihil exercitationem. Sit molestiae repellat hic voluptatem obcaecati sit quibusdam dolore sit rerum voluptas non neque porro qui beatae accusantium est impedit quibusdam. Et repellat vitae qui inventore omnis ad autem quia.
and and and and and and and and and and and and and and and and and and and and and
    `

    test('it returns top N words', () => {
        let top5Words: string[] = getTopNWords(text, 5)
        expect(top5Words).toHaveLength(5)
        expect(top5Words.every(word => word !== ' ')).toBeTruthy()
    })

    test('it returns top 50 words by default', () => {
        let top50Words: string[] = getTopNWords(text)
        expect(top50Words).toHaveLength(50)
        expect(top50Words.every(word => word !== ' ')).toBeTruthy()
    })

    test('it excludes words passed in an exclusion list', () => {
        let latinExclusions: string[] = ['et', 'est', 'qui', 'ut']
        let top5Words = getTopNWords(text, 5, latinExclusions)
        expect(top5Words.every(word => !latinExclusions.includes(word)))
    })

    test('it excludes words from a default exclusion list if none is given', () => {
        let top5Words = getTopNWords(text, 5)
        expect(top5Words.includes('and')).toBe(false)
    })
})
