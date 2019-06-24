import React from 'react'
import Helmet from 'react-helmet'
import './all.css'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/img/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png"/>
        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ffffff" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
