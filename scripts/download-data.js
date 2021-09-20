#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const https = require('https')
const unzipper = require('unzipper')
const xml2js = require('xml2js')

const dataZipUrl = "https://codeload.github.com/BSData/middle-earth/zip/refs/heads/master"

let outputFolder
if (process.argv[2]) {
  outputFolder = path.resolve(process.cwd(), process.argv[2])
} else {
  outputFolder = path.resolve(__dirname, "_data")
}
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder)
}
console.log(`Ouput folder is: ${outputFolder}`)

try {
  https.get(dataZipUrl, res => {
    res
      .pipe(unzipper.Parse())
      .on('entry', async entry => {
        if (entry.path.match(/\.cat/)) {
          const parts = entry.path.split(/[\\\/]/)
          const newPath = parts[parts.length - 1].replace('.cat', '.json')
          console.log(`${entry.path} --> ${newPath}`);
          const xmlString = (await entry.buffer()).toString('utf8')
          xml2js.parseString(xmlString, (e, json) => {
            fs.writeFile(path.resolve(outputFolder, newPath), JSON.stringify(json, null, 2), (e) => {
              if (e) console.log(e)
            })
          })
        } else {
          entry.autodrain()
        }
      })
  })
} catch (e) {
  console.log(e)
}
