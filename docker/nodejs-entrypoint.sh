#!/bin/bash
set -e

if [ "$1" = 'load' ]; then
    echo "###### NPM INSTALL ######";
    npm install;
    echo "###### NODE START SERV ######";
    npm run dev;
fi
