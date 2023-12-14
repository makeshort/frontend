FROM node:20-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine as production

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY package.json package-lock.json ./

RUN npm install --production
RUN npm install -g typescript
RUN npm install -g serve

EXPOSE 3000

CMD ["npm", "run", "start"]
