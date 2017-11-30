const fs = require('fs')
const MarkdownIt = require('markdown-it')
const meta = require('markdown-it-meta')
const glob = require('glob')
const assert = require('assert')

const md = new MarkdownIt()
md.use(meta)

var jaMetas = {}
var enMetas = {}
var currentPath = ''

function jaTask (cb) {
  glob("ja/**/*.md", {}, function (err, files) {
    files.forEach(function (path) {
      var data = fs.readFileSync(path)
      md.render(data.toString('utf-8', 0, data.length))
      jaMetas[path.replace('ja/', '')] = md.meta
      cb()
    })
  })
}

function enTask (cb) {
  glob("en/**/*.md", {}, function (err, files) {
    files.forEach(function (path) {
      var data = fs.readFileSync(path)
      md.render(data.toString('utf-8', 0, data.length))
      enMetas[path.replace('en/', '')] = md.meta
      cb()
    })
  })
}

describe('en & ja', function () {
  it('should be same.', function (done) {
    jaTask(function () {
      enTask(function () {
        assert.deepEqual(jaMetas, enMetas)
        done()
      })
    })
  })
})
