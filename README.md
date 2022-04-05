# orange-app

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

# Orange App Project - Nuxt Form

> This is a nuxt project with form support.

* Sign up Functionality
* Sign In Functionality
* Local storage and Session storage
* Form input checkout list
  
The Orange app is a SSG and SPA applicationi= built with nuxt.

<div align="center">

[![View Code](https://img.shields.io/badge/View%20-Code-green)](https://github.com/errea/Orange-checkout-App)
[![Github Issues](https://img.shields.io/badge/Github%20-Issues-red)](https://github.com/errea/Orange-checkout-App/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)]()

</div>

## 📝 Contents

<p align="center">
<a href="#with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#gs">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Author</a>
</p>

># [Description]
> By building this application, I will learn how to use React and Redux.
How to build the Bookstore website
You will need to build a website with two subpages: "Books" and "Categories." However, you will only need to implement the "Books" part (see the image below). The "Categories" page will stay empty in this MVP.



## 🔧 Built with<a name = "with"></a>

- JavaScript
- Vuejs/nuxtjs
- Local Storage and Session Storage
- React Routes
- Nuxt Life cycle
- Yarn
- Vee Validate
- Components
- Virtual DOM
- [Webpack config](hhttps://webpack.js.org/guides/getting-started/)
- ES6 Modules
- [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md)
- Use [Vuex]().
- Use styles in a Tailswind and SCSS app. [DOC](https://tailwindcss.com/).

![screenshot](/static/homepage.png)

![screenshot](/static/login.png)

![screenshot](/static/reg.png)

## [LIVE PREVIEW](https://develop--orange-checkout-form.netlify.app/)

## Getting Started <a name = "gs"></a>

> To get a local copy up and running follow these simple example steps.

<details>
  <summary>Get instructions</summary>

```
$ cd <folder>
```

~~~bash
$ git clone https://github.com/errea/Orange-checkout-App.git
$ cd Orange-checkout-App
~~~

Run `yarn Install` to install the node modules and webpacker.

Run `yarn build` to build the bundler.

Run `yarn start`  opens on `http://localhost:3000/` in your browser.

## Set up

* Open your terminal and locate the folder you want to clone the repository and follow the steps above to install

</details>



## Project Structure

    Book-Store-Redux Project
    └── node_modules
    └── .github\workflows
        └── linters.yml
    /src
    |---/components
    |---/redux
        |--- /books
                | books.js
        |--- /categories
                | categories.js
        | cofigureStore.js
    | index.js
    └── .eslintrc.json
    └── .gitignore
    └── .hintrc
    └──.stylelintrc.json
    └── MIT.md
    └── package-lock.json
    └── package.json
    └──README.md

## ✒️  Authors <a name = "author"></a>

👤 **Eri**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)
  
## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page]()

## 👍 Show your support and Star project

## Acknowledgments

- Microverse

## 📝 License

This project is [MIT](./MIT.md) licensed.
