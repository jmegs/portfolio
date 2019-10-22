# johnmeguerian.com

Welcome to the innards of my website.

# The Stack

This version runs on Middleman. Why? Because I wanted to go back to using a simple tool and refresh my memory with Ruby. The amount of stuff built in "for free" like minification, asset hashing, css preprocessing, etc feels like a breath of fresh air compared to having a huge gulpfile or bringing in a dependency on React or Vue just to get some of those developer conveniences.

# Running Locally
Prereqs: ruby 2.6.2 and latest bundler should be installed.

```sh
./bin/setup
bundle exec middleman # develop
bundle exec middleman build # build for prod
```
