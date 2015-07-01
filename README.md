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

www.gov.uk/transformation sits within the Design Principles app (https://github.com/alphagov/design-principles), so design principles is what you will ultimately be deploying.


Make sure transformation-dashboard master is up to date and correct locally

Make sure design-principles is up to date locally with a ```git pull origin master```

#### Within transformation-dashboard

Within your transformation-dashboard master branch, run the ```./compile.sh``` script

Make sure transformation-dashboard tags are up to date locally: ```git pull --tags origin master```

List those tags to find your new version number: ```git tag```

Tag the transformation-dashboard repo with your new version: ```git tag version-xx```

Push your new tag: ```git push --tags origin master```

#### Within design-principles

Now ```cd``` into design-principles and ```git status``` - you should see the /transformation files ready for staging

Checkout onto a new local branch with ```git checkout -b name-of-your-branch```

```git add .``` then commit. Your commit messge within design-principles should look something like this:

```
Transformation dashboard #version-xx <-- the version number you just tagged in transformation-dashboard

* Updated waste carrier to Beta <-- list the major changes in your update

https://github.com/alphagov/transformation-dashboard/compare/version-41...version-42 <-- add a comparison between your new version and the previous one

```

Now (still in design-principles) ```git push origin name-of-your-branch``` - this triggers a build on preview

