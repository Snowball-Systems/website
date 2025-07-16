# Snowball Systems Website

This repository contains the source code for the official marketing website for Snowball Systems and its revolutionary platform, Clarion. The website is built with Jekyll and is hosted on GitHub Pages.

## Project Structure

The project follows a standard Jekyll structure:

-   `_config.yml`: Contains the main Jekyll configuration for the site, including the site title and description.
-   `_layouts/`: This directory contains the HTML layout templates for the site.
    -   `default.html`: The main master layout for every page.
    -   `page.html`: The layout for standard content pages.
-   `assets/`: Contains all static assets.
    -   `css/`: Holds the stylesheets (e.g., `style.css`).
    -   `images/`: For storing images.
    -   `js/`: For storing JavaScript files.
-   `index.html`: The main landing page (homepage).
-   `*.md`: Markdown files that are automatically converted into content pages (e.g., `key-features.md`).
-   `Gemfile`: Specifies the Ruby gem dependencies for the project, such as Jekyll.

## Getting Started: Running the Website Locally

To view and edit the website on your local machine with live-reloading, follow these steps.

### Prerequisites

1.  **Ruby:** Ensure you have Ruby installed on your system. You can download it from [ruby-lang.org](https://www.ruby-lang.org/en/downloads/) or use [RubyInstaller for Windows](https://rubyinstaller.org/).
2.  **Bundler:** Bundler is a package manager for Ruby. Once Ruby is installed, you can install Bundler by running:
    ```bash
    gem install bundler
    ```

### Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install project dependencies:** Navigate to the project root and run the following command. This will read the `Gemfile` and install Jekyll and any other required gems.
    ```bash
    bundle install
    ```

### Running the Local Server

1.  **Start the Jekyll server:** From the project root, run:
    ```bash
    bundle exec jekyll serve --livereload
    ```
2.  **View your website:** Open your web browser and navigate to:
    [http://127.0.0.1:4000](http://127.0.0.1:4000)

The `--livereload` flag ensures that any changes you make to the source files will automatically trigger a browser refresh, allowing you to see your edits in real-time.
