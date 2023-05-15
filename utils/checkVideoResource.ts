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
