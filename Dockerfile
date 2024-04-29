# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
COPY entry.sh ./entry.sh
RUN chmod +x ./entry.sh
CMD ["./entry.sh"]
