/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: process.env.SHOULD_EXPORT === "true" ? "export" : undefined,
}

module.exports = nextConfig
