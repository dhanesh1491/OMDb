#!/bin/bash
if curl http://www.omdbapi.com/OMDB API/api/query | grep -q mypattern; then
  echo "Found pattern"
elif [ "${PIPESTATUS[0]}" -eq 0 ]; then
 echo "Server down, waiting one second" >&2
  sleep 1
done | 
  until grep -q mypattern; do
    echo "Waiting for pattern to match"
  done

