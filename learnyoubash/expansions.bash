#!/usr/bin/env bash

RESULT=$(($1 * ($2 + $3)))

#echo project-$RESULT/src/index.js project-$RESULT/src/util.js project-$RESULT/dest/index.js project-$RESULT/dest/util.js project-$RESULT/test/index.js project-$RESULT/test/util.js

echo project-$RESULT/{src,dest,test}/{index,util}.js
