#FROM php:8.4
#
#EXPOSE 8000
#
#RUN apt-get update && apt-get install -y \
#    libzip-dev zip unzip libpng-dev libjpeg-dev libfreetype6-dev git curl nodejs npm \
#    && docker-php-ext-configure gd --with-freetype --with-jpeg \
#    && docker-php-ext-install gd pdo_mysql zip bcmath sockets \
#    && pecl install redis && docker-php-ext-enable redis \
#    && docker-php-ext-install opcache \
#    && rm -rf /var/lib/apt/lists/*
#
#WORKDIR /var/www/html
#
#COPY . .
#
#COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
#
#RUN composer install --optimize-autoloader --no-dev
#
#RUN npm install
#RUN npm run build
#RUN rm -f public/hot
#
#RUN chown -R www-data:www-data storage bootstrap/cache public
#RUN chmod -R 755 storage bootstrap/cache public
#RUN chmod -R 755 public/build
#
#RUN php artisan config:clear
#RUN php artisan config:cache
#RUN php artisan route:cache
#
#CMD php artisan serve --host=0.0.0.0 --port=${PORT}

FROM php:8.4

EXPOSE 8000

# Install required packages, PHP extensions, and Redis
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip libpng-dev libjpeg-dev libfreetype6-dev git curl nodejs npm \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo_mysql zip bcmath sockets \
    && pecl install redis && docker-php-ext-enable redis \
    && docker-php-ext-install opcache \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

COPY . .

# Copy composer from official image
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

# Install Node dependencies and build frontend assets
RUN npm install
RUN npm run build
RUN rm -f public/hot

# Set permissions for storage, cache, and public directories
RUN chown -R www-data:www-data storage bootstrap/cache public
RUN chmod -R 777 storage bootstrap/cache  # Ensure Laravel can write
RUN chmod -R 755 public/build

# Cache configuration and routes
RUN php artisan config:clear
RUN php artisan config:cache
RUN php artisan route:cache

# Use built-in PHP server instead of `artisan serve`
# Render Free provides $PORT; artisan serve can fail on Free tier
CMD php -S 0.0.0.0:${PORT} -t public
