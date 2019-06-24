# omdbapiexam

A small docker image that allows you to query OMDB using their API.

**Note**:  You are required to obtain your own personal API key.

<http://omdbapi.com/apikey.aspx>

## Build

docker build -t <image:tag> .

Optionally you can pass your OMDB API Key into the build of the docker image via

docker build --build-arg OMDB_API_KEY=\<value\> -t

Optionally you can use GNUMake

make IMAGE=\<image:tag>

## Run

docker run \<image:tag> will print usage

Please provide a movie title

**Usage:**

* docker run -e OMDB_API_KEY=\<key> \<image:tag> \<movie title>

Optionally you can pass your OMDB API Key into docker build, but is not secure

* docker build --build-arg OMDB_API_KEY=\<key> -t \<image:tag> .
* docker run \<image:tag> \<movie title>

**Note**:  To debug OMDB lookup you can pass the argument DEBUG=true to run

docker run -e OMDB_API_KEY=\<value> -e DEBUG=true \<image:tag> \<title>

**Examples**:

* docker run -e OMDB_API_KEY=\<value> omdbapi:v1 real genius
* docker run -e OMDB_API_KEY=\<value> -e DEBUG=true omdbapi:v1  real
