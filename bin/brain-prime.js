#!/usr/bin/env node

import isPrimeGame from '../src/games/prime-game.js';
import { welcome } from '../src/index.js';

const userName = welcome();
isPrimeGame(userName);
