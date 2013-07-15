# Transformation Dashboard

The site is built using [Jekyll](http://jekyllrb.com/), and the CSS is [Sassified](http://sass-lang.com).

## Running the app yourself

Depending on your version of Git, you may need to run these commands to bring in the [GOV.UK Frontend Toolkit](https://github.com/alphagov/govuk_frontend_toolkit):

    $ git submodule init
    $ git submodule update

This should import Sass files from the GOV.UK Frontend Toolkit repository into `/transformation/assets/toolkit/`.

Next, install dependencies using bundler::

    $ bundle install

To start the app::

    $ bundle exec jekyll --server --auto

This will compile the site and make it available on http://localhost:4000/transformation. Changes will be reloaded without a restart.
