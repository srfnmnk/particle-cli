/*
 ******************************************************************************
 Copyright (c) 2016 Particle Industries, Inc.  All rights reserved.

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation, either
 version 3 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public
 License along with this program; if not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************
 */

import {expect} from '../test-setup';
import * as cli from '../../src/app/nested-yargs';

import {app} from '../../src/app/app';

describe('command line parsing', () => {

	describe('global flags', () => {
		describe('verbosity', () => {

			function assertVerbosity(argv, expected) {
				if (argv.clierror) {
					throw argv.clierror;
				}
				if (expected!==undefined) {
					expect(global).to.have.property('verboseLevel').equal(expected);
				} else {
					expect(global).to.not.have.property('verboseLevel');
				}
			}

			it('is 0 by default', () => {
				const argv = cli.parse(app, []);
				assertVerbosity(argv, 0);
			});

			it('is 1 for a single v flag', () => {
				const argv = cli.parse(app, ['-v']);
				assertVerbosity(argv, 1);
			});

			it('is 2 for a double v flag', () => {
				const argv = cli.parse(app, ['-vv']);
				assertVerbosity(argv, 2);
			});

		});
	});

});