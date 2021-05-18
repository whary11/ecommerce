export const validateEmail = (text) => {
  return  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(text)
}

export const validatePassword = (text) => {
  return text.length > 5
}