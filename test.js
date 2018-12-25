const fs = require('fs')
const MarkdownIt = require('markdown-it')
const meta = require('markdown-it-meta')
const glob = require('glob')
const assert = require('assert')

const md = new MarkdownIt()
md.use(meta)

var jaWIPs = []
var enWIPs = []

function jaTask (cb) {
  glob("ja/**/*.md", {}, function (err, files) {
    files.forEach(function (path) {
      var data = fs.readFileSync(path)
      md.render(data.toString('utf-8', 0, data.length))
      if(md.meta.WIP) jaWIPs.push(path.replace('ja/', ''))
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

describe('en & ja', function () {
  it('should be same.', function (done) {
    jaTask(function () {
      enTask(function () {
        assert.deepEqual({ja: jaWIPs, en: enWIPs}, {ja:[], en:[]})
        done()
      })
    })
  })
})
