# Use an official Python runtime as a parent image
FROM node:10-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN npm install && npm run build

# Run server.js when the container launches
CMD ["npm", "build/app.js"]