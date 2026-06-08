<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Fashluxee</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css"><![CDATA[
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

          body {
            font-family: 'Outfit', sans-serif;
            background: #09090b;
            color: #e4e4e7;
            padding: 40px 20px;
            font-size: 13px;
            line-height: 1.5;
            min-height: 100vh;
            margin: 0;
          }
          #content {
            max-width: 1000px;
            margin: 0 auto;
          }
          
          /* Header area */
          .header-area {
            border-bottom: 1px solid rgba(184, 147, 90, 0.25);
            padding-bottom: 24px;
            margin-bottom: 30px;
          }
          h1 {
            font-family: 'Playfair Display', serif;
            color: #ffffff;
            font-size: 32px;
            font-weight: 600;
            margin: 0 0 10px 0;
            letter-spacing: 0.02em;
          }
          h1 span {
            color: #b8935a;
            font-style: italic;
          }
          p.expl {
            color: #a1a1aa;
            font-size: 14px;
            margin: 5px 0;
            line-height: 1.6;
          }
          p.expl a {
            color: #b8935a;
            font-weight: 600;
            border-bottom: 1px dotted #b8935a;
            transition: all 0.2s ease;
          }
          p.expl a:hover {
            color: #ffffff;
            border-bottom-style: solid;
            text-decoration: none;
          }

          /* Stats Cards */
          .stats-grid {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
          }
          .stat-card {
            flex: 1;
            background: #121214;
            border: 1px solid rgba(184, 147, 90, 0.15);
            border-radius: 8px;
            padding: 16px 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          }
          .stat-card .label {
            display: block;
            font-size: 11px;
            text-transform: uppercase;
            color: #a1a1aa;
            letter-spacing: 0.1em;
            margin-bottom: 4px;
          }
          .stat-card .value {
            font-size: 24px;
            font-weight: 600;
            color: #ffffff;
          }
          .stat-card .value span {
            color: #b8935a;
          }

          /* Navigation Link */
          .back-link {
            display: inline-flex;
            align-items: center;
            color: #b8935a;
            font-weight: 600;
            margin-bottom: 24px;
            text-decoration: none;
            transition: all 0.2s ease;
            font-size: 13px;
          }
          .back-link:hover {
            color: #ffffff;
            transform: translateX(-4px);
          }

          /* Table Styles */
          table {
            border: 1px solid rgba(184, 147, 90, 0.15);
            border-collapse: collapse;
            width: 100%;
            background: #121214;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            border-radius: 8px;
            overflow: hidden;
          }
          th {
            background-color: #18181b;
            color: #b8935a;
            text-align: left;
            padding: 14px 20px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border-bottom: 2px solid rgba(184, 147, 90, 0.3);
          }
          td {
            padding: 14px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: #e4e4e7;
            font-size: 13.5px;
          }
          tbody tr:last-child td {
            border-bottom: none;
          }
          tbody tr:nth-child(even) td {
            background-color: rgba(255, 255, 255, 0.015);
          }
          tbody tr:hover td {
            background-color: rgba(184, 147, 90, 0.05);
            color: #ffffff;
          }
          td a {
            color: #b8935a;
            font-weight: 500;
            text-decoration: none;
            display: inline-block;
            word-break: break-all;
            transition: color 0.2s ease;
          }
          td a:hover {
            color: #ffffff;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            background: rgba(184, 147, 90, 0.12);
            color: #b8935a;
            border: 1px solid rgba(184, 147, 90, 0.25);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
        ]]></style>
      </head>
      <body>
        <div id="content">
          <!-- Header Area -->
          <div class="header-area">
            <h1>XML <span>Sitemap</span></h1>
            <p class="expl">
              This XML Sitemap is generated dynamically to help search engines crawl and index Fashluxee's pages.<br/>
              Learn more about sitemaps on <a href="https://sitemaps.org" target="_blank" rel="noopener noreferrer">sitemaps.org</a>.
            </p>
          </div>

          <xsl:choose>
            <!-- Check if sitemapindex (Sitemap Index) -->
            <xsl:when test="sitemap:sitemapindex">
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="label">Total Sitemaps</span>
                  <span class="value"><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></span>
                </div>
                <div class="stat-card">
                  <span class="label">Schema Type</span>
                  <span class="value">Sitemap <span>Index</span></span>
                </div>
                <div class="stat-card">
                  <span class="label">Format</span>
                  <span class="value">XML <em>0.9</em></span>
                </div>
              </div>

              <p class="expl" style="margin-bottom: 15px;">
                This XML Sitemap Index file contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sitemaps.
              </p>
              
              <table cellpadding="3">
                <thead>
                  <tr>
                    <th width="75%">Sitemap</th>
                    <th width="25%">Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td>
                        <xsl:variable name="loc"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                        <a href="{$loc}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:variable name="lastmod"><xsl:value-of select="sitemap:lastmod"/></xsl:variable>
                        <xsl:value-of select="concat(substring($lastmod, 1, 10), ' ', substring($lastmod, 12, 5), ' ', substring($lastmod, 20, 6))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>

            <!-- Check if urlset (Individual Sitemap) -->
            <xsl:when test="sitemap:urlset">
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="label">Total URLs</span>
                  <span class="value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                </div>
                <div class="stat-card">
                  <span class="label">Content Type</span>
                  <span class="value">Index <span>Links</span></span>
                </div>
                <div class="stat-card">
                  <span class="label">Format</span>
                  <span class="value">XML <em>0.9</em></span>
                </div>
              </div>

              <a href="/sitemap.xml" class="back-link">&#8592; Go to sitemap index</a>

              <p class="expl" style="margin-bottom: 15px;">
                This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.
              </p>
              
              <table cellpadding="3">
                <thead>
                  <tr>
                    <th width="70%">URL</th>
                    <th width="15%">Change Freq</th>
                    <th width="15%">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="loc"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                        <a href="{$loc}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:choose>
                          <xsl:when test="sitemap:changefreq">
                            <span class="badge"><xsl:value-of select="sitemap:changefreq"/></span>
                          </xsl:when>
                          <xsl:otherwise>
                            <span class="badge">weekly</span>
                          </xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td>
                        <xsl:choose>
                          <xsl:when test="sitemap:priority">
                            <xsl:value-of select="sitemap:priority"/>
                          </xsl:when>
                          <xsl:otherwise>
                            0.8
                          </xsl:otherwise>
                        </xsl:choose>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>
          </xsl:choose>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
