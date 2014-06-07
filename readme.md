# React Tag Input Component

![taginput screenshot](https://github.com/sterlingwes/react-taginput/raw/master/example/screenshot.png)

Reusable input component for adding tags, keywords, etc. Only dependency is React itself.

[Demo?](https://cdn.rawgit.com/sterlingwes/react-taginput/master/example/index.html)

### Using with Webpack

If you use Webpack to build your project, simply require `index.js` and ensure you have the `jsx-loader` configured as I have for the example build (`webpack.config.js`).

### Using directly

Either do an offline transform with [react-tools](http://facebook.github.io/react/docs/getting-started.html), or include the `JSXTransformer` script before your script tag:

`<script type="text/jsx" src="taginput.jsx"></script>`

### Available Props / Config

*   `tags`: an array of stings representing tags to show when the component is mounted

### Styling

Overriding styles is easy with the following class hierarchy:

*   `taginput-container` (contains all, has border)
    *   `input` (absolutely positioned right + bottom, with left used inline to indicate cursor offset, and width used inline to fill the container)
    *   `taginput_tags` (contains tags, absolutely positioned)
        *   `taginput_tag`
        *   `taginput_tag:hover`
            *   `taginput_x` (span indicating the tag can be removed)

### Example Build

To play around and re-run the example, build via Webpack with `--watch`:

*   `npm install webpack -g`
*   `npm install`
*   `webpack --watch`

### Questions?

[@sterlingwes](http://twitter.com/sterlingwes)