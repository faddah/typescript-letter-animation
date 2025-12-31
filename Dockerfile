FROM node:24-bookworm-slim

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

EXPOSE 5173

CMD ["npm", "start"]