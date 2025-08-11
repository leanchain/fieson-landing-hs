# Use an official Node.js runtime as a parent image
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or bun.lockb) to the working directory
COPY package.json bun.lockb ./

# Install dependencies
RUN npm install -g bun && bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the React app
RUN bun run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the build output from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]