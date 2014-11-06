# grunt-replace-filename

> a replace grunt plugin.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-replace-filename --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-replace-filename');
```

## The "grunt-replace-filename" task

### Overview
In your project's Gruntfile, add a section named `grunt-replace-filename` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig(
{
  replace: 
  {
    options: 
    {
      // Task-specific options go here.
    },
    your_target: 
    {
      // Target-specific file lists and/or options go here.
      files:
      {
        targetFiles:
        [
          {
            file:'test/testgrunt_test.js',
            reg:/test\?>\/[\s\S]*.test.js/,
            distFile:'dist/*.test.js',
            prefix:'test?>/'
          },
          {
            file:'test/testgrunt_test.js',
            reg:/rls\?>\/[\s\S]*.rls.js/,
            distFile:'dist/*.rls.js',
            prefix:'rls?>/'
          }
        ]
      }       
    },
  },
});
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig(
{
  repalce: 
  {
    targetFiles:
    [
      {
        file:'test/testgrunt_test.js',//need modify target file
        reg:/test\?>\/[\s\S]*.test.js/,//replace regex or string
        distFile:'dist/*.test.js', //get generate file name
        prefix:'test?>/'//if replace need prefix or ''
      },
      {
        file:'test/testgrunt_test.js',
        reg:/rls\?>\/[\s\S]*.rls.js/,
        distFile:'dist/*.rls.js',
        prefix:'rls?>/'
      }
    ]
  },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
