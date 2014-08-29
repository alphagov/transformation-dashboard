Transformation Dashboard
========================

This small site is built using [Jekyll](http://jekyllrb.com/)

### govuk_frontend_toolkit submodule

The app uses the [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit) as a Git submodule. Depending on your version of Git, you *may* need to run these commands to bring in the toolkit:

```
$ git submodule init
$ git submodule update
```

The toolkit lives here: ```/_assets_pipeline/govuk_toolkit/```

To update the toolkit to the latest release, ```$ git submodule foreach git pull origin master```
Then add and commit with a useful message like "Updating toolkit"

### govuk_template

Also using the [govuk_template](https://github.com/alphagov/govuk_template). Please see the README.md within ```/_layouts/``` for more info on integrating the template.

### Getting up and running locally

Check out the repo, and make sure the toolkit submodule is present (see above).

Install the various dependencies with [Bundler](http://bundler.io) - ```$ bundle install```

Start the app: ```$ jekyll serve --watch```

This will compile the site and serve it on http://localhost:4000/transformation/ - any changes (apart from _config.yml) will be compiled without restarting the server. See [the Jekyll docs](http://jekyllrb.com/docs/home/) for more.

### Release process

This isn't nice at the moment. /transformation sits within the Design Principles app.
