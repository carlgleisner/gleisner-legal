import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

const securityHeaders = [
  {
    key: 'Reporting-Endpoints',
    value: 'default="https://fyhx63fm.uriports.com/reports"',
  },
  {
    key: 'Permissions-Policy-Report-Only',
    value: 'microphone=(), camera=(), fullscreen=*, payment=()',
  },
  {
    key: 'NEL',
    value:
      '{"report_to":"default","max_age":2592000,"include_subdomains":true,"failure_fraction":1.0}',
  },
  {
    key: 'Report-To',
    value:
      '{"group":"default","max_age":10886400,"endpoints":[{"url":"https://fyhx63fm.uriports.com/reports"}],"include_subdomains":true}',
  },
  {
    key: 'Cross-Origin-Embedder-Policy-Report-Only',
    value: 'require-corp; report-to="default"',
  },
  {
    key: 'Cross-Origin-Opener-Policy-Report-Only',
    value: 'same-origin; report-to="default"',
  },
  // {
  //   key: 'Content-Security-Policy-Report-Only',
  //   value:
  //     "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; report-uri https://fyhx63fm.uriports.com/reports/report; report-to default",
  // },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '0',
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
