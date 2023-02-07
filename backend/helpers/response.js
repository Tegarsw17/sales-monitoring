const response = (msg, data, type, error = true) => ({
    error,
    type,
    message: msg,
    data,
  });
    
  module.exports = response