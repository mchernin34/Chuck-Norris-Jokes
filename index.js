import { jokes } from './jokes'
import fs from 'fs'

jokes.getOne().then(joke => {
  document.getElementById('joke').innerHTML = joke
})

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8')

document.getElementById('copy').innerHTML = copy
