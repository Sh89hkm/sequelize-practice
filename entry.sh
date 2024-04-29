#!/bin/sh

# Check if a script name is provided as an argument
if [ -n "$1" ]; then
  node "$1"
else
  echo "No script specified."
fi
