#!/usr/bin/env node

import isEvenGame from '../src/games/even-game.js';
import welcome from '../src/cli.js';

const userName = welcome();
isEvenGame(userName);
