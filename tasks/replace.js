/*
 * grunt-replace-filename
 * https://github.com/h1bomb/grunt-replace-filename.git
 *
 * Copyright (c) 2014 H1bomb
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) 
{
  grunt.registerMultiTask('replace', "replace some words in files", function() 
  {

      if(!this.data&&!data.targetFiles)
      {
        grunt.log.error("no target files!!")
        return;
      }
      for(var i=0;i<this.data.targetFiles.length;i++)
      {
        
        var curTarget = this.data.targetFiles[i];//get current target file
        var distPaths = grunt.file.expand(curTarget.distFile);//get distFile paths

        //get generate file name
        var fileNameArr = distPaths[0].split("/");
        var fileName = fileNameArr[fileNameArr.length-1];
        
        //get target file's content and replace some words
        var fileString = grunt.file.read(curTarget.file);
        var prefix = curTarget.prefix?curTarget.prefix:'';
        fileString = fileString.replace(curTarget.reg,curTarget.prefix+fileName);
        grunt.file.write(curTarget.file, fileString);
      }
      grunt.log.oklns("replace files finished!!");
  });
};
