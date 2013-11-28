<pre>
                          ,------.        ,--.       ,--.
                          |  .--. ',---.,-'  '-.,---.|  ,--. ,--.
                          |  '--'.| .-. '-.  .-(  .-'|  |\  '  /
                          |  |\  \\   --. |  | .-'  `|  | \   '
                          `--' '--'`----' `--' `----'`--.-'  /
                            Make Real Estate Apps in    `---'
                               Minutes Not Months

</pre>

# A test-driven JS interview

This repo includes a set of tests that can be used to assess the skills of
a candidate for a JavaScript position, or to improve one's own skills.

## I want to work on the tests; what do I do?
To use the tests, you will need to install Node -- you can do this via the
[download page](http://nodejs.org/#download) or using
[Homebrew](http://mxcl.github.com/homebrew/) if you are on a Mac.

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    npm install
    node bin/serve

You can then view the tests in your browser at
[http://localhost:4444](http://localhost:4444).

When you visit that page, all of the tests should be failing; your job is to
get the tests to pass. To do this, you'll need to refer to the tests in the
files in the `tests/app` directory, and edit the files in the `app/` directory.
Once you update a test, you can reload the test page in the browser to see
whether it worked.

You can also run (most of) the tests on the command line:

    npm test

The command line runner is a work in progress; contributions welcome :)

You can also develop with live-reload and grunt-watch if that's your thing:

    npm install -g grunt-cli
    npm install
    grunt develop

Copyright &copy; 2012 [Rebecca Murphey](https://github.com/rmurphey/js-assessment).

This work is licensed under the [Creative Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
license. You are free to share and remix the work, and to use it for commercial
purposes under the following conditions:

- *Attribution* — You must attribute the work in the manner specified by the
  author or licensor (but not in any way that suggests that they endorse you or
  your use of the work).
- *Share Alike* — If you alter, transform, or build upon this work, you may
  distribute the resulting work only under the same or similar license to this
  one.

Any of these conditions can be waived if you get permission from the copyright
holder.
