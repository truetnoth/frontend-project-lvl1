#!/usr/bin/env node

import isEvenGame from '../src/even-game.js';
import welcome from '../src/cli.js';

const userName = welcome();
isEvenGame(userName);