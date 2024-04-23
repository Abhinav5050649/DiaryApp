# This is the README for the Dockerfile

## Here is what each line is doing

1) A base image of alpine node image is being used
2) /usr/src/app is being set as working directory
3) COPY command being used to copy the package.json and package-lock.json files to the working directory
4) npm install being done to install dependencies
5) Now, directory contents are being copied to the image
6) Port 6000 is being exposed
7) "node index.js" command being executed using the docker CMD command