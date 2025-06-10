FROM node:22.9.0

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --force
# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
# Healthcheck to ensure the server is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1  
# Set the environment variable for the server port
ENV PORT=3000
# Set the environment variable for the server host
ENV HOST=0.0.0.0
# Set the environment variable for the server protocol
ENV PROTOCOL=http
# Set the environment variable for the server name
ENV SERVER_NAME=localhost
# Set the environment variable for the server version
ENV SERVER_VERSION=1.0.0
# Set the environment variable for the server description
ENV SERVER_DESCRIPTION="Node.js Server"
# Set the environment variable for the server author
ENV SERVER_AUTHOR="Bruna Braguin <bruna.a.braguin@gmail.com>"
# Set the environment variable for the server license
ENV SERVER_LICENSE="MIT"
# Set the environment variable for the server repository
ENV SERVER_REPOSITORY="https://github.com/BrunaABraguin/bytebank"
