export const selectClass = (cl) => {
  return document.querySelector(cl)
}

export const changeClass = (bef, aft) => {
  return (document.querySelector(bef).className = aft)
}

export const getId = (id) => {
  return document.getElementById(id)
}

export const checked = (cl, aft) => {
  if (selectClass(cl)) {
    changeClass(cl, aft)
  }
}
