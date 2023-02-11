const userDecorator = (user, token) =>{
  
    const mappedUser = {
        username: user.fullname,
        role: user.role,
        token: token
      }

    return mappedUser
  }
  
  module.exports = {
    userDecorator,
  }