#!/usr/bin/env node

import gcd from '../src/games/gcd-game.js';
import { welcome } from '../src/index.js';

const userName = welcome();
gcd(userName);
