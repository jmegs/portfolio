// Pulls down content from contentful and saves as JSON in ./data
//===============================================================

const fs = require('fs')
const path = require('path')
require('dotenv').config()

const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

// Initializes the contentful javascript client
//=============================================
const client = require('contentful').createClient({
  space: SPACE,
  accessToken: TOKEN
})

// Get project entries, sanitize them, and write to disk
//======================================================
const getAllContent = async () => {
  let projects = {}

  console.log(`🚀  Starting import...`) // emoji are critical 😉
  try {
    // Get project entries from contentful
    const entries = await client.getEntries({
      content_type: 'project'
    })

    // Pull each item's fields from all of contentful's garbage
    const items = entries.items.map(i => i.fields)

    // Data Grooming 💇🏻‍♀️
    // gives us a nice object with key of the project slug and only
    // the values we need directly.
    items.forEach(item => {
      projects[item.slug] = {
        name: item.name,
        slug: item.slug,
        role: item.role,
        agency: item.agency,
        link: item.link,
        intro: item.description,
        images: item.images.map(i => {
          return {
            alt: i.fields.title,
            caption: i.fields.description,
            url: `https:${i.fields.file.url}`
          }
        })
      }
    })
    console.log(`👀  Found ${Object.keys(projects).length} entries`)
    console.log(`✏️  Writing to disk...`)

    // write the data and its nice new makeover to a JSON file
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', 'projects.json'),
      JSON.stringify(projects)
    )
    console.log(`👍  Success`)
    return true
  } catch (error) {
    console.error(error)
  }
}

// 3...2...1...Blastoff
//======================================================
getAllContent()
