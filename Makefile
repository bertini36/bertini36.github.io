.PHONY: install run build preview optimize-images clean

install:
	pnpm install

run:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

optimize-images:
	pnpm optimize-images

clean:
	rm -rf dist .astro node_modules
