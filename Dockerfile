FROM ubuntu:22.04

WORKDIR /app

COPY package.json /app
# RUN npm install

COPY shadow-cljs.edn /app
COPY package-lock.json /app
COPY package.json /app
COPY resources /app
COPY public/css /app/public/css
COPY public/index.html /app/public
COPY src /app/src

# Install OpenJDK-8
RUN apt update && \
    apt install -y openjdk-11-jre-headless nodejs npm && \
    apt-get clean autoclean && \
    apt-get autoremove --yes && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/

run npm install && \
    npx shadow-cljs compile app

CMD ["npx","shadow-cljs", "server", "app"]