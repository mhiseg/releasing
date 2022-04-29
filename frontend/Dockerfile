FROM nginx:1.21-alpine

RUN apk update && \
    apk upgrade && \
    # add more utils for sponge to support our startup script
    apk add --no-cache moreutils

# clear any default files installed by nginx
RUN rm -rf /usr/share/nginx/html/*

COPY startup.sh /usr/local/bin/startup.sh
RUN chmod +x /usr/local/bin/startup.sh

COPY nginx.conf /etc/nginx/nginx.conf

# actually load the distribution into the image
COPY spa/ /usr/share/nginx/html/

CMD ["/usr/local/bin/startup.sh"]
