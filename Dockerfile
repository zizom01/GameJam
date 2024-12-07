# Use Node.js runtime as the base image
FROM node:16

# Set the working directory
WORKDIR C:\Users\admin\Desktop\FCC\GameJam

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
