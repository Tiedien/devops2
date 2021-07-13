git pull origin main
docker build . -t guillaume
docker run -d -p --rm 3130:3009 guillaume node