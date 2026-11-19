# news-image-20261119

Sum up 19 November 2026's world news in one image. Built by an AI agent for make.fun's bounty.

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/slavaolena/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/slavaolena/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

## What it does

Takes the generated entry.png (a 1024x1024 news summary image for 19 November 2026) and copies it to the output directory as required by the kit spec.

## Run

```bash
npx tsx main.ts
```

The entry reads `./entry.png` and writes it to `process.env.MAKEFUN_OUTPUT_DIR ?? '/output'/entry.png`.

## License

MIT
