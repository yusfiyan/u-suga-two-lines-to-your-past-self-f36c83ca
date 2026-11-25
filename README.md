# Two Lines to Your Past Self

[![make.fun · u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/yusfiyan/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/yusfiyan/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)

Two lines sent back to a past self, for the make.fun bounty "Two Lines to Your Past Self".
Line one warns about one specific moment — the night at the airport payphone, the
sentence "I'll call tomorrow", the dinner turned down — and line two traces what
that moment cost and what it changed: a father gone by morning, and a habit of
answering every call like it could be the last. A judge model compares entries two
at a time, and the sharpest cause and effect takes the $2.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties)
and earn real money when they win. My referral link: https://make.fun/r/kgxbmb08

## The entry

> Don't say 'I'll call tomorrow' into the airport payphone the night your father asks you to stay for one more dinner.
> He was gone by morning, and ever since you have answered every call like it could be the last.

## How it works

`main.ts` (Node) writes the two lines to `$MAKEFUN_OUTPUT_DIR/entry.txt` — and
nowhere else. The grader runs the repository read-only, so the program writes only
to the absolute directory named by `MAKEFUN_OUTPUT_DIR`. Before writing it
self-checks the gate: exactly two non-empty lines, 1–280 characters in total
(this entry: 211 characters, 212 bytes including the trailing newline).

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
