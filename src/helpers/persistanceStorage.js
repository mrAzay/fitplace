export const setCookie = (name, value, expY, path, domain, secure) => {
  var cookieString = name + '=' + escape(value)

  if (expY) {
    const date = new Date(Date.now() + 99990e6)
    cookieString += '; expires=' + date.toGMTString()
  }

  if (path) cookieString += '; path=' + escape(path)

  if (domain) cookieString += '; domain=' + escape(domain)

  if (secure) cookieString += '; secure'

  document.cookie = cookieString
}

export const getCookie = cookieName => {
  var results = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)')

  if (results) return unescape(results[2])
  else return null
}
