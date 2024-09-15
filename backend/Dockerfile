# backend/Dockerfile
FROM ubuntu:20.04

# Install Python and dependencies
RUN apt-get update && apt-get install -y \
    --no-install-recommends tzdata \
    python3 \
    python3-pip \
    python3-venv \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the Django project files
COPY . /app

# Install Python dependencies
RUN pip3 install -r requirements.txt
# Expose port 8000 for Django
EXPOSE 8000

# Run Django development server
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
