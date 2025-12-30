FROM node:24-bookworm-slim

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies, skipping optional deps and all build scripts
# This prevents native module compilation (bufferutil, utf-8-validate)
RUN npm install --legacy-peer-deps --omit=optional

# Copy the rest of the application
COPY . .

EXPOSE 5173

CMD ["npm", "start"]