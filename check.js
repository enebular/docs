const fs = require('fs')
const MarkdownIt = require('markdown-it')
const meta = require('markdown-it-meta')
const glob = require('glob')
const md = new MarkdownIt()
md.use(meta)

var jaDones = []
var enWIPs = []

function jaTask (cb) {
  glob("ja/**/*.md", {}, function (err, files) {
    files.forEach(function (path) {
      var data = fs.readFileSync(path)
      md.render(data.toString('utf-8', 0, data.length))
      if(!md.meta.WIP) jaDones.push(path.replace('ja/', ''))
    })
    cb()
  })
}

function enTask (cb) {
  glob("en/**/*.md", {}, function (err, files) {
    files.forEach(function (path) {
      var data = fs.readFileSync(path)
      md.render(data.toString('utf-8', 0, data.length))
      if(md.meta.WIP) enWIPs.push(path.replace('en/', ''))
    })
    cb()
  })
}

jaTask(function () {
  enTask(function () {
    enWIPs = enWIPs.filter(function (en, i) {
      return jaDones.indexOf(en) >= 0
    })
    console.log('Please translate:', enWIPs);
  })
})