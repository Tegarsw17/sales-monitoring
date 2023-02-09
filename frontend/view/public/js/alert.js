const errorAlert = async (message, link) => {
  await Swal.fire({
    // title: 'Success!',
    title: message,
    icon: 'error',
    confirmButtonText: 'Confirm',
  }).then((result) => {
    location.replace(link)
  })
}

const successAlert = async (message, link) => {
  await Swal.fire({
    // title: 'Success!',
    title: message,
    icon: 'success',
    confirmButtonText: 'Confirm',
  }).then((result) => {
    location.replace(link)
  })
}

const warningAlert = async (message, link) => {
  await Swal.fire({
    // title: 'Success!',
    title: message,
    icon: 'warning',
    confirmButtonText: 'Confirm',
  }).then((result) => {
    location.replace(link)
  })
}
