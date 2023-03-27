/*===================================================================================================================
WebdriverIO setup (From Scratch)
=====================================================================================================================/*

Install Node.js (https://nodejs.org/en/ )
Run following to make sure node is installed 
     node –version
     npm –version
To create a project from scratch
      create a root folder and run the following commands from cli
      npm init -y (it creates a new package.json file with all default options)
      npm install @wdio/cli –save-dev
      npx wdio config -y (this will configure required modules and create a wdio.conf.js file
Create framework structure
    snatchbot_test
        -   data    ( Test data)
        -   helpers (Web commands and support functions)
        -   pages   (Page objects)
        -   specs   (test scenarios)

To genearte allure report
npm install -g allure-commandline --save-dev
allure generate allure-results --clean && allure open
/*======================================================a