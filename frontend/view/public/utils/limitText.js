const limitChar = (str, num = 10) => {
  if (str.length <= num) {
    return str
  } else {
    str = str.substring(0, num)
    return str + '...'
  }
}
