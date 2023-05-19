install: # Устновка
	npm ci

publish: # Публикация
	npm publish --dry-run

lint:
	npx eslint .

brain-games: # Запуск программы
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

