#!/bin/bash

# $ npm install -g uglifycss
uglifycss 'css/links.css' > 'css/links.min.css'
uglifycss 'css/style.css'  > 'css/style.min.css'
uglifycss 'sys/sys.css' > 'sys/sys.min.css'
