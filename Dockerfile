FROM php:8.4

EXPOSE 8000

RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip libpng-dev libjpeg-dev libfreetype6-dev git curl nodejs npm \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo_mysql zip bcmath sockets \
    && pecl install redis && docker-php-ext-enable redis \
    && docker-php-ext-install opcache \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html

COPY . .

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN composer install --optimize-autoloader --no-dev

RUN npm install
RUN npm run build
RUN rm -f public/hot

RUN chown -R www-data:www-data storage bootstrap/cache public
RUN chmod -R 755 storage bootstrap/cache public
RUN chmod -R 755 public/build

RUN php artisan config:clear
RUN php artisan config:cache
RUN php artisan route:cache

CMD php artisan serve --host=0.0.0.0 --port=${PORT}
