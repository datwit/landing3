---
title: API flalq using Flask and SQLAlchemy
summary: API flalq uses the structure from the MySQL Basic Tutorial database. Developed with Flask, SQLAlchemy (not Flask_SQLAlchemy), marshmallow, unittest and mysql db.  
tags: Data Science
img: /images/cases/flalq.png
date: 2021-05-08T19:05:27.220Z
author: Danay Meneses Abad
reading: 15 
---

API flalq uses the structure from the MySQL Basic Tutorial database. Developed with Flask, SQLAlchemy (not Flask_SQLAlchemy), marshmallow, unittest and mysql db. In this case, the application has been built with SQLAlchemy ORM. Contains different data types and endpoints, trying to cover simple examples that can be useful to other projects.

<!--more-->

## Challenge

## Solution

Initially, you can create two separate databases to be run in development and testing environments, respectively. Nevertheless, this can be done on your terms and reset in the
config.py file.

Configure the variable FLASK_ENV in development mode in the activate.bat file of the environment, as follows:

    `set "FLASK_ENV=development"*`

Running on your console:

    `python run.py`

The tables in the database will be created instantly.

### Inside the application

This is a small code snippet from an endpoint:

    @office_routes.route('/offices/<string:officeCode>', methods=['GET'])
    def getoffice(officeCode):
        officeCode_found = officeCode
        found = session.query(Office).get(officeCode_found)
        if not found:
            return resp.response_with(resp.SERVER_ERROR_404, value={"error": "Key data not exists"}), resp.SERVER_ERROR_404
        else:
            result = object_schema.dump(found)
            return resp.response_with(resp.SUCCESS_200, value={"Request": result}), resp.SUCCESS_200

To add data, for example an office, the query would be as follows:

    {
        "employeeNumber": 2,
        "lastName": "Employee",
        "firstName": "Second",
        "extension": "1000",
        "email": "sales@yahoo.es",
        "officeCode": "OF1",
        "reportsTo": 1,
        "jobTitle": "Shopman"
    }

### How to test

First, set *FLASK_ENV* in test mode:

    `set "FLASK_ENV=testing"*`

Then, run each unit test as follows :

    `python -m unittest api/tests/offices.py`

In this project, Coverage (Coverage Documentation) has also been used. It monitors the program, noting which parts of the code have been executed. Then, it analyzes the source to identify code that could have been executed but was not. Coverage measurement is typically used to gauge the effectiveness of tests. It can show which parts of your code are being exercised by tests, and which are not.

You can install Coverage in the usual ways. The simplest way is:

    pip install coverage

And run for tests, with unittest in this case:

    coverage run -m unittest api/tests/offices.py

Then to see the results table:

    coverage report -m api/tests/offices.py

There is another way to show this result and it is the html report:

    coverage html api/tests/offices.py


> To see the full Github study case go [**here**](https://github.com/datwit/flalq)

> The image of this work is licensed under Datwit LLC Copyright 
