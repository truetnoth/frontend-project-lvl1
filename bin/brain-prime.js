#!/usr/bin/env node

import isPrimeGame from '../src/games/prime-game.js';
import welcome from '../src/cli.js';

const userName = welcome();
isPrimeGame(userName);
