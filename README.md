# Thrifty

## Description

This project is meant to be an online marketplace where users can buy and sell used, fashionable clothing at an affordable price.

**Note**: if you are not planning to deploy your app to Render and prefer to use
SQLite, you will need to make the following changes in the project files:

1. In the `Gemfile`, replace `gem 'pg', '~> 1.1'` with `gem 'sqlite3', '~>
   1.4'`.
2. In the `database.yml` file, change the line `adapter: postgresql` to
   `adapter: sqlite3`.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```


### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```



# Dependencies

The application is run on a React frontend and a Ruby on Rails backend. As for the payment processor, we are using Stripe to handle our payments so make sure to run "bundle install" and "npm install --prefix client" to make sure you have all the required packages. 

# How does it work?

Whether you are logged in or not, you will be directed to the home page where you can view listings made by sellers. They are categorized by Mensware and Womensware and you can also filter them by category. In order to list items, you can sign up as a seller and you will now have a button on the NavBar called Seller Dashboard. Here, sellers can add items to their list of listings as well as update or delete previously made items. 

If you sign up or login as a customer, then instead of a seller dashboard they will now have a shopping cart into which they can add items listed. Once they are satisifed with their shopping cart, they can check out where you will be moved to a checkout page where Stripe will handle our payments. If the payment is successful, then the items should disappear from your shopping cart and the selected items will be deleted from the database and no longer show up in your lisitngs. 

## Credits
My close friends Kenneth Lee and Brendan Powers help me bring this application to life and I would like to give them both shoutouts for being understanding and helpful. 
Kenneth Lee: github link: https://github.com/kennethslee613?fbclid=IwAR21w2k-HWRCd7FHdFeMHPQ2z3y1D8SOBpeKd93LQgF_zikWyxa7DxbWRww
Brendan Powers: https://github.com/UndecidedTech

## license
MIT License

Copyright (c) [2023] [Allen Kim]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
