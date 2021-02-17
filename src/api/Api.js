import * as Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://baconipsum.com/api/'
})

export async function API() {
  let txt = await instance.get(`?type=meat-and-filler&sentences=4&format=text`).then((response) => response.data)
  return txt
}
