<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          ul { list-style: none; padding-left: 0; }
          li { margin-bottom: 10px; }
          a { text-decoration: none; color: #1a73e8; }
          a:hover { text-decoration: underline; }
          small { color: #555; margin-left: 5px; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <ul>
          <!-- Loop through each URL -->
          <xsl:for-each select="/*[local-name()='urlset']/*[local-name()='url']">
            <li>
              <a href="{*[local-name()='loc']}">
                <xsl:value-of select="*[local-name()='loc']"/>
              </a>
              <small>(Last modified: <xsl:value-of select="*[local-name()='lastmod']"/>)</small>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
