#!/usr/bin/env node

import calcGame from '../src/games/calc-game.js';
import { welcome } from '../src/index.js';

const userName = welcome();
calcGame(userName);
