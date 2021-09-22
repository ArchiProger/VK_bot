async function sendMessage (message) {
    document.querySelector('#im_editable0').textContent = message
    await delay(getRandom(900, 2500))
    document.querySelector('.im-send-btn.im-chat-input--send._im_send.im-send-btn_audio').click()
}

function delay (n) {
  return new Promise(resolve => setTimeout(resolve, n))
}

function getRandom (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

async function main () {
  for (let i = 0; i < 100; i++) {
    await sendMessage(`Привет ${i} раз.`)
  }
}
