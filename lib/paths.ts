export const basePath = ''

/**
 * Prepends the basePath to a given asset path if it starts with a leading slash.
 * This is useful for images and other static assets that need to work on GitHub Pages subpaths.
 */
export function getAssetPath(path: string): string {
    if (path.startsWith('/') && !path.startsWith(basePath)) {
        return `${basePath}${path}`
    }
    return path
}
