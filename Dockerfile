# Use the official Node.js 18 runtime built on Alpine Linux (smaller image size)
FROM node:18-alpine

# Set the working directory inside the container; all following paths are relative to this
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker layer caching
# (dependencies won't reinstall unless these files change)
COPY package*.json ./

# Install Node.js dependencies defined in package.json (and locked by package-lock.json if present)
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Document that the container listens on port 5000 (for runtime port mapping with -p)
EXPOSE 8000

# Define the default command to start the server when the container runs
# Runs the application using the Node.js runtime.
CMD ["node", "src/server.js"]
