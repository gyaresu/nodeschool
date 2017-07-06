#!/usr/bin/env bash

items=($*)
items=(${items[*]:1:2})
items=( I am ${items[*]} and $4)
echo "${items[@]}"

#epithets=(I am "${@:2:2}" and "${@:4:1}")
#echo "${epithets[*]}"
