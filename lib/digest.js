var md5 = require('md5')
var _ = require('lodash')

function key(axiosConfig) {
  //Content-Length is calculated automatically by Axios before sending a request
  //We don't want to include it here because it could be changed by axios

  let headers = _.pick(axiosConfig.headers, ['User-Agent', 'user-agent', 'Accept', 'accept'])
  if(axiosConfig.headers.common){
    headers = Object.assign(headers, axiosConfig.headers.common)
  }

  var baseConfig ={
      url: axiosConfig.url,
      method: axiosConfig.method,
      data: axiosConfig.data,
      headers: headers
  }

  return md5(JSON.stringify(baseConfig))
}

module.exports = key
