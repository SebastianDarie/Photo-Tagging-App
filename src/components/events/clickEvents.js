const clickCharacter = (
  e,
  imgData,
  charInput,
  setCharInput,
  alert,
  setGameOver
) => {
  if (charInput === true) {
    setCharInput(false)
  } else {
    const axisX = e.clientX
    const axisY = e.clientY
    console.log(axisX, axisY)
    const targetBox = document.createElement('div')
    targetBox.className = 'target__box'
    targetBox.style.position = 'absolute'
    targetBox.style.left = e.pageX - 20 + 'px'
    targetBox.style.top = e.pageY - 20 + 'px'
    targetBox.style.height = '45px'
    targetBox.style.width = '45px'
    targetBox.style.border = '4px dashed #000'
    document.body.append(targetBox)

    const dropdown = document.createElement('div')
    dropdown.className = 'dropdown__menu'
    dropdown.onblur = setCharInput(false)
    dropdown.style.left = e.pageX + 40 + 'px'
    dropdown.style.top = e.pageY - 20 + 'px'
    document.body.append(dropdown)

    imgData.map(
      (doc) =>
        (dropdown.innerHTML += `<div class='dropdown__menuOption'>${doc.name}</div>`)
    )

    document
      .querySelectorAll('.dropdown__menuOption')
      .forEach((option) =>
        option.addEventListener('click', () =>
          makeSelection(
            option.innerText,
            axisX,
            axisY,
            targetBox,
            dropdown,
            imgData,
            setCharInput,
            alert,
            setGameOver
          )
        )
      )

    setCharInput(true)
  }
}

const makeSelection = (
  name,
  axisX,
  axisY,
  targetBox,
  dropdown,
  imgData,
  setCharInput,
  alert,
  setGameOver
) => {
  const character = imgData.find((el) => el.name === name)

  if (character === undefined || character.coordinates === undefined) {
    document.body.removeChild(targetBox)
    document.body.removeChild(dropdown)
    setCharInput(false)
  } else if (
    axisX >= character.coordinates[0] &&
    axisX <= character.coordinates[1] &&
    axisY >= character.coordinates[2] &&
    axisY <= character.coordinates[3]
  ) {
    targetBox.className = 'target__boxFound'
    document.body.removeChild(dropdown)

    character.found = true
    setCharInput(false)

    imgData.every((doc) => doc.found === true)
      ? setGameOver(true)
      : alert.success('good job')
  } else {
    document.body.removeChild(targetBox)
    document.body.removeChild(dropdown)
    setCharInput(false)

    alert.error('wrong! try again')
  }
}

export default clickCharacter
