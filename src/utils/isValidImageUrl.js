const imageUrlPattern = /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i

function isValidImageUrl(url) {
  const trimmedUrl = url.trim()

  if (!trimmedUrl) {
    return false
  }

  try {
    const parsedUrl = new URL(trimmedUrl)

    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return false
    }

    return imageUrlPattern.test(parsedUrl.pathname)
  } catch {
    return false
  }
}

export default isValidImageUrl
