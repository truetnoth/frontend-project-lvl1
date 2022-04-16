#!/usr/bin/env node

import progression from '../src/games/progression-game.js';
import { welcome } from '../src/index.js';

const userName = welcome();
progression(userName);
