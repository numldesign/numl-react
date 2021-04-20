/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { withLayer0 } = require('@layer0/next/config')
const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

module.exports = withLayer0(
    withMDX({
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        typescript: {
            // !! WARN !!
            // Dangerously allow production builds to successfully complete even if
            // your project has type errors.
            // !! WARN !!
            ignoreBuildErrors: true,
        },
    })
)

