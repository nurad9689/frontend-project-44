install: # Устновка
	npm ci

brain-games: # Запуск программы
	node bin/brain-games.js

publish: # Публикация
	npm publish --dry-run
