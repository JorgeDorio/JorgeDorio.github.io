function mode() {
  mode = document.getElementById('mode')
  modePic = document.getElementById('modePic').src
  atual = modePic.slice(-7)
  if (atual == 'lua.png') {
    document.getElementById('modePic').src = 'sol.png'
    mode.href = 'style_sobre_light.css'
  } else {
  }
}
