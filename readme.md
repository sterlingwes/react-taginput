# React Tag Input Component

![taginput screenshot](https://github.com/sterlingwes/react-taginput/raw/master/example/screenshot.png)

Reusable input component for adding tags, keywords, etc. Only dependency is React itself.

### Props

*   `tags`: an array of tags to show when the component is mounted

### Styling

Overriding styles is easy with the following class hierarchy:

*   `taginput-container` (contains all, has border)
    *   `input` (absolutely positioned right + bottom, with left used inline to indicate cursor offset, and width used inline to fill the container)
    *   `taginput_tags` (contains tags, absolutely positioned)
        *   `taginput_tag`
        *   `taginput_tag:hover`
            *   `taginput_x` (span indicating the tag can be removed)

### Questions?

[@sterlinwes](http://twitter.com/sterlingwes)