# twentyseventeen-child
A child theme template for WordPress twentyseventeen.

### Features
- Grunt build & livereload
- SCSS
- Easy to use custom colors

### Prerequisites
- git
- npm
- yarn

## Getting started
Clone this repository to your WordPress themes directory and build styles, scripts etc.

```bash
git clone https://github.com/vaaralav/twentyseventeen-child.git
cd twentyseventeen-child
yarn
npm run build
```

Now twentyseventeen-child theme is ready to go! Try it out on your WordPress site.

## Developing your theme
To start developing start watch task:

```bash
npm start
```

*Note: You might need to update `functions.php` so that livereload URI in `function twentyseventeen_child_enqueue_scripts` is correct. To do that replace the string `'http://127.0.0.1'` eg. with `gethostname()`.*

*See the line: `wp_register_script('livereload', 'http://127.0.0.1' . ':35729/livereload.js?snipver=1', null, false, true);`*

### Scripts
- `npm start`: Watch js and css files, automatically make development build and livereload.
- `npm run build`: Make a new production build to `dist/` directory.
- `npm run build:dev`: Make a new development build to `dist/` directory.

## Inspiration
This theme's grunt tasks have been inspired by [YeoPress theme template (Copyright Wes Todd)](https://github.com/wesleytodd/YeoPress/tree/template)
