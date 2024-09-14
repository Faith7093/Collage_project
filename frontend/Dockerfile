# Use Ubuntu as the base image
FROM ubuntu:20.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    build-essential \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the Vite project files from the local machine to the container
COPY vite-project /app/vite-project

# Change to the Vite project directory
WORKDIR /app/vite-project

# Install project dependencies
RUN npm install

# Expose port 3000 for Vite
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]
