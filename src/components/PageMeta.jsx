import { useEffect } from 'react'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionMeta = document.querySelector('meta[name="description"]')
    const ogTitleMeta = document.querySelector('meta[property="og:title"]')
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
    const previousDescription = descriptionMeta?.getAttribute('content')
    const previousOgTitle = ogTitleMeta?.getAttribute('content')
    const previousOgDescription = ogDescriptionMeta?.getAttribute('content')

    document.title = title
    descriptionMeta?.setAttribute('content', description)
    ogTitleMeta?.setAttribute('content', title)
    ogDescriptionMeta?.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (previousDescription) descriptionMeta?.setAttribute('content', previousDescription)
      if (previousOgTitle) ogTitleMeta?.setAttribute('content', previousOgTitle)
      if (previousOgDescription) ogDescriptionMeta?.setAttribute('content', previousOgDescription)
    }
  }, [title, description])

  return null
}
