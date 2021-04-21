/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { withLayer0 } = require('@layer0/next/config')
const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

module.exports = withLayer0(
    withServiceWorker(
        withMDX({
            pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
            typescript: {
                // !! WARN !!
                // Dangerously allow production builds to successfully complete even if
                // your project has type errors.
                // !! WARN !!
                ignoreBuildErrors: true,
                // Output sourcemaps so that stacktraces have original source filenames and line numbers when tailing
                // the logs in the Layer0 developer console.
                layer0SourceMaps: true,
            },
        })
    )
)

