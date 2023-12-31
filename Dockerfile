FROM node:18.16.0-alpine 

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:npde . .

USER node

RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
