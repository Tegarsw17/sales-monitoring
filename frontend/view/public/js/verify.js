const token = localStorage.getItem('token')

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}

const verifyToken = async () => {
  try {
    if (!token) throw err
    // const response = await axios.get(`${BASE_URL}/auth/verify`, config)
    // console.log(response);
    return true
  } catch (err) {
    return false
  }
}

const verifyPage = async () => {
  if (token) {
    if (verifyToken) {
      const currentPath = location.pathname
      if (currentPath === '/login') {
        location.replace('/')
      }
      return true
    } else {
      localStorage.removeItem('token')
    }
  }
  if (!token && location.pathname != '/login') {
    var element = document.getElementById('list-catalog')
    element.classList.add('invisible')
    warningAlert('Silahkan login terlebih dahulu!', '/login')
    return false
  }
}

const logout = async () => {
  try {
    successAlert('Logout Berhasil!', '/login')
    localStorage.removeItem('token')
  } catch (err) {
    errorAlert(err.message, '/')
  }
}

verifyPage()
