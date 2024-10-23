---
title: "Streamlining Static Web Development"
date: 2024-07-24  
tags:
- bash
- nodejs
- jamstack
- github-pages
---

There are times when even using Hugo for static web development is overkill. This articles shows how to efficiently develop small static web pages with some of the same advantages as the Hugo environment:

  - Easily invoke a zero-configured static web server.
  - Optimize development efficiency with LiveReload.
  - Automate the environment.
  - Optimize for production.

The solutions described will use [Node.js](https://nodejs.org/en/) and Bash scripts.

<!--more-->

## Easily Invoke a Zero-Configured Static Web Server

Depending on the environment, there are readily available ways of invoking a zero-configured static web server that assumes the current working directory is the document root.

In the Node.js environment, this is accomplished by installing [the appropriate package](https://github.com/http-party/http-server):

```

npm install -g http-server

```

A web server can then be invoked by changing to the intended document root and simply running:

```

http-server & 

```

The console output:

```

Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080
  http://192.168.1.133:8080
Hit CTRL-C to stop the server

```

The web server is now available at localhost:8080.


## Optimize Development Efficiency With LiveReload

Easily invoking a static web server is obviously very convenient. Now the development process can be greatly optimized by eliminating repeated interruptions to refresh the page under development. This is easily accomplished with an idea inspired by Hugo: [LiveReload](http://livereload.com/).

In the Node.js environment, install the [LiveReload server package](https://github.com/napcs/node-livereload):


```

npm install -g livereload

```

Once again, change to the intended document root, and run *livereload*, which will start a zero-configured web server that simultaneously serves the livereload script and watches the current working directory for changes.


``` 

livereload &

```

To wire a webpage such as index.html to use LiveReload, the script that communicates with the *livereload* server must be included in the document *head*:


```

<script src="http://localhost:35729/livereload.js"></script>    

```

A further optimization that isolates the development environment from the production code includes the following alternate code in the page *head* that conditionally includes the LiveReload script: 

```

<script>
    // in development, load the livereload script 
    if (window.location.hostname === "localhost") {
        var script = document.createElement('script');
        script.src = 'http://localhost:35729/livereload.js';
        document.head.appendChild(script);
    } 
</script>

```

## Automate the Environment

Now, it would be nice to start both web server processes with one command, and this is easy enough to do with a simple bash script that wraps the separate calls:

```
 
#!/bin/bash

livereload &
http-server &

```

But it would also be nice to stop both processes with one *ctrl-c*. This can be accomplished with a slightly more involved bash script:

```

#!/bin/bash

# Run a static web server in the current working directory
# and also run a livereload server that watches CWD

# Function to stop both processes
cleanup() {
  echo "Stopping processes $PID1 and $PID2"
  kill "$PID1" "$PID2"
  wait "$PID1"
  wait "$PID2"
}

# Set up a trap to catch signals and run the cleanup function
trap cleanup SIGINT SIGTERM

# Start the first process and capture the PID
livereload &
PID1=$!

# Start the second process and capture the PID
http-server &
PID2=$!

echo "Started processes with PIDs $PID1 and $PID2"

# Wait for both processes to finish
wait $PID1
wait $PID2

```

I want to keep this helper script with the rest of the project codebase, but isolated from the main project source code. A common convention is to create a parallel directory, often called *bin* or *scripts* (to avoid collisions with existing directories that may already be so named), and then move the bash helper script there.  

It is here that I further optimize the environment by leveraging a tool I already use, [direnv](https://direnv.net/), a simple and easy, yet powerful tool for managing multiple development environments, particularly for JAMStack projects, such as Hugo-based sites.

In a *.envrc* file in the project root, simply add:

```

PATH_add ./bin

```

Now whenever I enter the directory with the *.envrc* file, the wrapper script is available in my *PATH*.

I highly recommend direnv, however I caution that **because *.envrc* can contain sensitive information, one should proactively add it to *.gitignore***.


## Optimize For Production

To minify files for production, the most straightforward approach is to have a source document directory of files that are directly edited and a separate "build" directory for the generated, optimized files.

As an example, assume the target environment is Github Pages, with the common configuration of serving from the *docs* directory. As a convention, I will do all local development in a parallel directory *docsrc*. The scripts that follow will create and populate the *docs* directory.

Starting with a conventional directory structure for a static web site under *docsrc*:

- index.html
    - assets/
        - js/
            - main.js
        - css/
            - main.css
            - print.css
        - images/
        - fonts/

Install several more tools in the Node.js environment:

- [Terser](https://github.com/terser/terser), to minify JavaScript.
- [CleanCSS](https://github.com/clean-css/clean-css-cli), to minify CSS. 
- [HTML Minifier](https://github.com/kangax/html-minifier), to minify HTML.


```

npm init -y
npm install -g terser
npm install -g clean-css-cli
npm install -g html-minifier

```

The *npm init* command creates a *package.json* file. Within this file, the minification commands are defined:

```

{
  "name": "minify",
  "version": "1.0.0",
  "description": "Minify HTML, JavaScript, and CSS files to prepare for publication. The source is /docsrc and output in /docs.",
  "scripts": {
    "minify-js":        "terser docsrc/assets/js/main.js --compress --mangle --output docs/assets/js/main.js",
    "minify-cssmain":   "cleancss -o docs/assets/css/main.css docsrc/assets/css/main.css",
    "minify-cssprint":  "cleancss -o docs/assets/css/print.css docsrc/assets/css/print.css",
    "minify-html":      "html-minifier --input-dir docsrc --output-dir docs --collapse-whitespace --remove-comments --minify-css true --minify-js true --file-ext html"
  },
  "dependencies": {
    "terser": "^5.10.0",
    "clean-css-cli": "^5.3.0",
    "html-minifier": "^4.0.0"
  }
}

```

These scripts are then invoked from a bash script in *bin/publish.sh*, that properly populates the *docs* production target.

```

#!/bin/bash

source_base_dir="docsrc"
target_base_dir="docs"

rm -rf "$target_base_dir" 

mkdir -p "$target_base_dir/assets/fonts"
cp -r "$source_base_dir/assets/fonts" "$target_base_dir/assets/"

mkdir -p "$target_base_dir/assets/img"
cp -r "$source_base_dir/assets/img" "$target_base_dir/assets/"

mkdir -p "$target_base_dir/assets/js"
mkdir -p "$target_base_dir/assets/css"

npm run minify-js 
npm run minify-cssmain
npm run minify-cssprint
npm run minify-html

``` 

