import React, { useEffect, useState } from 'react'
import { API } from '../../api/Api.js'
import { selectClass, changeClass, getId, checked } from '../../dom/dom'

let interval, ind, miss, i

export function Home() {
  const [text, setText] = useState('Text will be here!')
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(100)

  function timer() {
    let time = 1
    interval = setInterval(() => {
      setCount(Math.round((60 * ind) / time))
      time++
    }, 1000)
  }

  function br() {
    clearInterval(interval)
  }

  document.onkeypress = function (e) {
    if (e.key === text[0]) {
      timer()
    }

    if (e.getModifierState('CapsLock')) alert('You have the CapsLock enabled')

    if (e.key === text[ind]) {
      checked('.start', 'done')
      checked('.err', 'done')
      checked('.sp', 'start')

      ind++
    } else if (selectClass('.start')) {
      miss++
      changeClass('.start', 'err')
      setCorrect((100 * (1 - miss / text.length)).toFixed(1))
    }
  }

  useEffect(() => {
    setCorrect(100)
    setCount(0)
    miss = 0
    ind = 0
    br()

    getId('mainTxt').innerHTML = ''

    text.split('', text.length)
    for (i = 0; i < text.length; i++) {
      getId('mainTxt').insertAdjacentHTML('beforeend', `<span class='sp'>${text[i]}</span>`)
    }

    getId('mainTxt').firstElementChild.className = 'start'
  }, [text])

  return (
    <div className="container content">
      <div className="row justify-content-center">
        <div className="stats col-2">
          <button type="button" className="btn btn-outline-secondary" onClick={async () => setText(await API())}>
            Start print
          </button>
          <div>Char per min</div>
          <div>{count}</div>
          <div>Corrected</div>
          <div> {correct}</div>
        </div>
        <div className="txtPlace col-10" id="mainTxt"></div>
      </div>
    </div>
  )
}
