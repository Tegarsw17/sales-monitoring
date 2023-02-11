const getData = async (url) => {
  var response = await axios.get(url)
  const data = await response.data.data

  //console.log(JSON.parse(data))

  return data
}
