# Welcome to LiveSearch ![version2](https://img.shields.io/badge/version-2.0.1-green.svg) [![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/IndianGhost/liveSearch/blob/master/LICENSE)

You can use this project to draw a table of data and to search values at realtime, just by following these few steps

# Install
## Git
```
git clone https://github.com/IndianGhost/liveSearch.git
```

## composer
```
composer create-project indianghost/live-search YourProjectName
```
Or (in case of stability issues)
```
composer create-project indianghost/live-search=dev-master YourProjectName
```

# Inteded users
Generally here are two users for this project (I guess so), if you are one of them don't hesitate to use it:

## 1. In case you have one (or many in the same page) existing HTML table displays data (from a database or whatever):
You have an existing HTML table contains a **lot of rows** (for example: You display _data_ from _database_ into an HTML table), you want to add a functionality that allows you to find values of some row without scrolling page and wasting your time.
This project can save you bro !
# Follow these steps
1. clone it from **github** or download it via **composer** as mentionned above

2. include jquery on your webpage:
  - _via CDN_
  copy & paste this line on your head block:
  `<script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>`
  
  OR
  
  - _local file_
  You downloaded the project ! well, now copy the file [**js/jquery.min.js**](https://github.com/IndianGhost/liveSearch/blob/master/js/jquery.min.js) and paste it in your js directory. Then, add the tag script to your head block.
  `<script type="text/javascript" src="LinkToYourDirectory/jquery.min.js"></script>`

3. add a new input tag, it will be your **search box**. it should have the `id="js-search"`, for example I used this tag :
  `<input type="text" class="form-control" style="width: 20%" id="js-search" placeholder="Taper pour chercher…">`
  :pushpin:**Remember the required attribute is id="js-search"**
  
4. add an attribute `class="js-table"` to your table(s).
    When you type something in the search box the result will appear simultaneously on your table(s).
    :pushpin:_Notice:_ if your table has not the tag `<tbody>` you must add it `<table><tbody>Searched Data HERE</tbody></table>`.

5. Finally, You must copy the file [**js/search.js**](https://github.com/IndianGhost/liveSearch/blob/master/js/search.js) and add the script tag at the bottom of page (:pushpin:just before `</body>` for performance reasons). It should be similar to this tag :
`<script type="text/javascript" src="LinkToYourDirectory/search.js"></script>`

That's all for your case, enjoy !

## 2. In case you have data already formatted using **JSON**:
In this case your task will be a piece of cake all you have to do is:

1. rename your json file to _data.json_

2. clone or download the project (step 1 above)

3. replace the file [**js/data.json**](https://github.com/IndianGhost/liveSearch/blob/master/js/data.json) by your _data.json_ !

That's all for your case, enjoy !

# Demonstration
![alt text](https://github.com/IndianGhost/liveSearch/blob/master/screenshots/1.PNG)

![alt text](https://github.com/IndianGhost/liveSearch/blob/master/screenshots/2.PNG)

![alt text](https://github.com/IndianGhost/liveSearch/blob/master/screenshots/3.PNG)

![alt text](https://github.com/IndianGhost/liveSearch/blob/master/screenshots/4.PNG)

# Copyright and license
Copyright 2018 Achraf BELLAALI is a free open-source project. The code is released under [The MIT LICENSE](https://github.com/IndianGhost/liveSearch/blob/master/LICENSE) you can do whatever you want with it !

# Support My development
If you found it helpful, you can support me to develop new projects By :
- Buying a gig from my fiverr account :
[**achrafbellaali**](https://www.fiverr.com/achrafbellaali)

- if you are an Arab developer, here's my account on Khamsat:
[**أشرف بلعلي**](https://khamsat.com/user/أشرف-بلعلي)

- You can also donate on Paypal:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/achrafbellaali)
