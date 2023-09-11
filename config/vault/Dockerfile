FROM vault:1.13.3
USER root
RUN apk --no-cache add jq yq curl
COPY ../../script /tmp/script
RUN chown vault:vault -R /vault
USER vault
