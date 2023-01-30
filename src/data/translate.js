const translate = require('deepl')

let texts = []
const main = async () => {
    console.log('Here')
    try {
        const result = await translate({
            text: 'I am a text',
            target_lang: 'FR',
            auth_key: '9cbf03c7-cd9a-0c9c-4980-019fbd2a0b76:fx',
            // All optional parameters available in the official documentation can be defined here as well.
        })

        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

main()
