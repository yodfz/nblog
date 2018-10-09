#!/usr/bin
echo scp -r ./server/template root@yodfz.com:/wwwroot/www.yodfz.com/server
echo scp -r ./server/public/styles root@yodfz.com:/wwwroot/www.yodfz.com/server/public
scp -r ./server/public/static/images root@yodfz.com:/wwwroot/www.yodfz.com/server/public/static
