
/*===================================================================================================================
WebdriverIO setup (From Scratch)
=====================================================================================================================/*
1. install node js
2. install vs code
3. Open project folder in vs code
4. Open terminal and type npm install
5. and type npx wdio
6. Open command prompt To genearte allure report
   * npm install -g allure-commandline --save-dev
   * allure generate allure-results --clean && allure open 


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
