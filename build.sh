#!/bin/bash

set -ef

cd $(dirname $0)/src

xmls=$(find . -type f -name '*.xml')

for xf in $xmls
do
  hf=$(echo $xf | sed 's/.xml/.html/')
  xsltproc $xf -o $hf
	mv $hf ../$hf
done
