export const isVimeoOrYouTubeEmbedURL = (url: string) => {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|vimeo\.com\/)([a-zA-Z0-9_-]{11}|[0-9]{8,10})/
  const match = url.match(regex)
  if (match) {
    if (regex.test(url)) {
      const videoId = match[1]
      const resource = url.includes('youtube') ? 'youtube' : 'vimeo'
      return {
        embedCorrect: true,
        resource: resource,
        videoId: videoId,
      }
    } else {
      return {
        embedCorrect: false,
        resource: 'no cover',
        videoId: '',
      }
    }
  } else {
    return {
      embedCorrect: false,
      resource: 'no cover',
      videoId: '',
    }
  }
}

export const validateVimeoUrl = (url: string, disabled?: boolean) => {
  if (disabled) {
    return true
  }

  if (url) {
    // Extract the video ID from the URL
    const match = url.match(/^https?:\/\/player\.vimeo\.com\/video\/(\d+)/i)
    const videoId = match && match[1]

    // Check that the URL matches the expected format and that the video ID is valid
    if (!videoId) {
      return 'Please enter a valid Vimeo video URL in the format https://player.vimeo.com/video/{ID}'
    }
  }

  return true
}
