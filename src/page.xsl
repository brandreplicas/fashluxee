<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="utf-8" indent="yes" doctype-system="about:legacy-compat" />
  <xsl:template match="/html">
    <html lang="en">
      <head>
        <title>
          <xsl:value-of select="./head/short/@value" />
        </title>
        <meta name="description">
          <xsl:attribute name="content">
            <xsl:value-of select="./head/short/@value" />
            <xsl:value-of select="./head/long/@value" />
          </xsl:attribute>
        </meta>
        <meta property="og:title">
          <xsl:attribute name="content">
            <xsl:value-of select="./head/short/@value" />
          </xsl:attribute>
        </meta>
        <meta property="og:description">
          <xsl:attribute name="content">
            <xsl:value-of select="./head/short/@value" />
            <xsl:value-of select="./head/long/@value" />
          </xsl:attribute>
        </meta>
        <meta property="article:published_time">
          <xsl:attribute name="content">
            <xsl:value-of select="./head/datetime/@value" />
          </xsl:attribute>
        </meta>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title">
          <xsl:attribute name="content">
            <xsl:value-of select="./head/short/@value" />
          </xsl:attribute>
        </meta>
        <meta name="twitter:description">
          <xsl:attribute name="content">
            <xsl:value-of select="./head/short/@value" />
            <xsl:value-of select="./head/long/@value" />
          </xsl:attribute>
        </meta>
        <xsl:copy-of select="./head/*" />
        <meta charset="UTF-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="dns-prefetch" href="//s.w.org"></link>
        <link rel="icon" href="favicon.ico" sizes="75x75"></link>
        <meta property="article:author" content="Fashluxee" />
        <meta property="og:type" content="website" />
        <link href="style.css?_=1.3.0" rel="stylesheet"></link>
      </head>
    <body>
    <input type="checkbox" id="toggle"/>
    <label for="toggle" class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>
  
    <nav class="sidebar">
      <img style="margin: 0px auto;" src="fashluxee-logo-transformed.png" alt="Fashluxee" width="200"/>
      <ul>
        <li><a class="d-link" href="index.html">About</a></li>
        <li><a class="d-link" href="gallery.html">Gallery</a></li>
        <li><a class="d-link" href="contact.html">Contact</a></li>
        <li><a class="d-link" href="privacy-policy.html">Privacy Policy</a></li>
        <li><a class="d-link" href="terms-of-use.html">Terms Of Use</a></li>
      </ul>
    </nav>
    <main>
        <div class="container">
          <div class="profile">
              <div class="profile-bio">
                <img src="fashluxee-logo-transformed.png" alt="Fashluxee" width="200"/>
              </div>
	          <div class="profile-bio short">
		          <xsl:value-of select="./head/short/@value" />
	          </div>
          </div>
					<xsl:copy-of select="./body/main/*" />
        </div>
				<div class="toast-container" id="toast-container"></div>
    </main>
		<script type="text/javascript" src="toast.js"/>
    <xsl:copy-of select="./body/template/*"/>
  </body>
  </html>
  </xsl:template>
</xsl:stylesheet>
