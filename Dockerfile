# Базовый образ
FROM php:8.4-apache

# Открываем порт Apache
EXPOSE 80

# Устанавливаем PHP и зависимости
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip libpng-dev libjpeg-dev libfreetype6-dev git curl nodejs npm \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo_mysql zip bcmath sockets \
    && pecl install redis && docker-php-ext-enable redis \
    && docker-php-ext-install opcache \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Копируем проект
COPY . .

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# PHP зависимости
RUN composer install --optimize-autoloader --no-dev

# Node.js зависимости и сборка
RUN npm install
RUN npm run build
RUN rm -f public/hot

# Права для Apache
RUN chown -R www-data:www-data storage bootstrap/cache public
RUN chmod -R 755 storage bootstrap/cache public
RUN chmod -R 755 public/build

# Laravel кеш
RUN php artisan config:clear
RUN php artisan config:cache
RUN php artisan route:cache

# Apache DocumentRoot и запуск
COPY ./_deploy/000-default.conf /etc/apache2/sites-available/000-default.conf
RUN a2ensite 000-default.conf

CMD ["apache2-foreground"]
