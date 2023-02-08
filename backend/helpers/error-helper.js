const response = require('./response')

const ok = (res, message, data = []) => {
  const type = 'success'
  return res.json(response(message, data, type, false))
}

const created = (res, message, data = []) => {
  const type = 'success'
  return res.status(201).json(response(message, data, type, false))
}

const badRequest = (res, message) => {
  const type = 'invalid_request_error'
  return res.status(400).json(response(message, [], type))
}

const notFound = (res, message) => {
  const type = 'invalid_request_error'
  return res.status(404).json(response(message, [], type));
}

const internalError = (res, message) => {
  const type = 'api_error'
  return res.status(500).json(response(message, [], type));
}

const authenticationFailed = (res, message) => {
  const type = 'authentication_error'
  return res.status(401).json(response(message, [], type));
}

const duplicate = (res, message) => {
  const type = 'duplicate_data_error'
  return res.status(409).json(response(message, [], type))
}


module.exports = {
  ok,
  created,
  badRequest,
  notFound,
  internalError,
  authenticationFailed,
  duplicate,
}