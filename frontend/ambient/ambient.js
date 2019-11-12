/*!
 * Isomer - The distributed application framework
 * ==============================================
 * Copyright (C) 2011-2019 Heiko 'riot' Weinen <riot@c-base.org> and others.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

/**
 * @ngdoc function
 * @name isomerFrontendApp.controller:ambientCtrl
 * @description
 * # ambientCtrl
 * Controller of the isomerFrontendApp
 */
class ambient {

    constructor(scope, rootscope, $modal, user, objectproxy, socket, menu) {
        this.scope = scope;
        this.rootscope = rootscope;
        this.$modal = $modal;
        this.user = user;
        this.op = objectproxy;
        this.socket = socket;
        this.menu = menu;

        this.knobOptions = {
            min: -1,
            step: 0.1,
            max: 1,
            size: 34,
            barWidth: 5,
            trackWidth: 5,
            startAngle: -150,
            endAngle: 150
        };

        this.loops = {
            'loop_a': {
                'name': 'Loop A',
                'color': 'red',
                'description': 'This program is free software: you can redistribute it and/or modify        \n' +
                    'it under the terms of the GNU Affero General Public License as published by \n' +
                    'the Free Software Foundation, either version 3 of the License, or           \n' +
                    '(at your option) any later version.                                         \n' +
                    '                                                                            \n' +
                    'This program is distributed in the hope that it will be useful,             \n' +
                    'but WITHOUT ANY WARRANTY; without even the implied warranty of              \n' +
                    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the               \n' +
                    'GNU Affero General Public License for more details.                         '
            },
            'loop_b': {
                'name': 'Loop B',
                'color': 'orange',
                'description': 'This program is free software: you can redistribute it and/or modify        \n' +
                    'it under the terms of the GNU Affero General Public License as published by \n' +
                    'the Free Software Foundation, either version 3 of the License, or           \n' +
                    '(at your option) any later version.                                         \n' +
                    '                                                                            \n' +
                    'This program is distributed in the hope that it will be useful,             \n' +
                    'but WITHOUT ANY WARRANTY; without even the implied warranty of              \n' +
                    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the               \n' +
                    'GNU Affero General Public License for more details.                         '
            },
            'loop_c': {
                'name': 'Loop C',
                'color': 'green',
                'description': 'This program is free software: you can redistribute it and/or modify        \n' +
                    'it under the terms of the GNU Affero General Public License as published by \n' +
                    'the Free Software Foundation, either version 3 of the License, or           \n' +
                    '(at your option) any later version.                                         \n' +
                    '                                                                            \n' +
                    'This program is distributed in the hope that it will be useful,             \n' +
                    'but WITHOUT ANY WARRANTY; without even the implied warranty of              \n' +
                    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the               \n' +
                    'GNU Affero General Public License for more details.                         '
            },
            'loop_d': {
                'name': 'Loop D',
                'color': 'turquoise',
                'description': 'This program is free software: you can redistribute it and/or modify        \n' +
                    'it under the terms of the GNU Affero General Public License as published by \n' +
                    'the Free Software Foundation, either version 3 of the License, or           \n' +
                    '(at your option) any later version.                                         \n' +
                    '                                                                            \n' +
                    'This program is distributed in the hope that it will be useful,             \n' +
                    'but WITHOUT ANY WARRANTY; without even the implied warranty of              \n' +
                    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the               \n' +
                    'GNU Affero General Public License for more details.                         '
            },
            'loop_e': {
                'name': 'Loop E',
                'color': 'cyan',
                'description': 'This program is free software: you can redistribute it and/or modify        \n' +
                    'it under the terms of the GNU Affero General Public License as published by \n' +
                    'the Free Software Foundation, either version 3 of the License, or           \n' +
                    '(at your option) any later version.                                         \n' +
                    '                                                                            \n' +
                    'This program is distributed in the hope that it will be useful,             \n' +
                    'but WITHOUT ANY WARRANTY; without even the implied warranty of              \n' +
                    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the               \n' +
                    'GNU Affero General Public License for more details.                         '
            },
            'loop_f': {
                'name': 'Loop F',
                'color': 'blue',
                'description': 'This program is free software: you can redistribute it and/or modify        \n' +
                    'it under the terms of the GNU Affero General Public License as published by \n' +
                    'the Free Software Foundation, either version 3 of the License, or           \n' +
                    '(at your option) any later version.                                         \n' +
                    '                                                                            \n' +
                    'This program is distributed in the hope that it will be useful,             \n' +
                    'but WITHOUT ANY WARRANTY; without even the implied warranty of              \n' +
                    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the               \n' +
                    'GNU Affero General Public License for more details.                         '
            }
        };

        this.scenes = {
            'scene_a_uuid':
                {
                    'name': 'Scene A',
                    'loops': {
                        'loop_a': {
                            volume: 0.5,
                            balance: -0.5,
                            muted: false
                        },
                        'loop_b': {
                            muted: true,
                            balance: 0.25,
                            volume: 0.25
                        }
                    }
                },
            'scene_b_uuid':
                {
                    'name': 'Scene B',
                    'loops': {
                        'loop_a': {
                            volume: 0.5
                        },
                        'loop_b': {
                            volume: 0.25
                        },
                        'loop_c': {
                            volume: 0.5
                        },
                        'loop_d': {
                            volume: 0.25
                        },
                        'loop_e': {
                            volume: 0.5
                        },
                        'loop_f': {
                            volume: 0.25
                        }
                    }
                }
        };

        this.scene = this.scenes['scene_a_uuid'];

        this.volume = 0.75;
        this.balance = 0;
        this.muted = false;

        this.adjustBalance = false;

        this.loopDescriptionOpened = {};

        let self = this;

        this.request_loops = function () {
            console.log('[ambient] Login successful - fetching loops data');
            return;
            /*
            this.op.search('loop', '*', ['name', 'description', 'price_crate']).then(function (msg) {
                let loops = msg.data.list;
                console.log("[ambient] Loops: ", loops);
                for (let loop of loops) {
                    self.loops[loop.uuid] = loop;
                }
            });
             */
        };

        this.loginupdate = this.rootscope.$on('User.Login', function () {
            self.request_loops();
        });

        if (this.user.signedin === true) {
            self.request_loops();
        }


        self.scope.$on('$destroy', function () {
        });
    }

    switchscene(uuid) {
        console.log('[AMBIENT] Switching scene: ', uuid);
        this.scene = this.scenes[uuid];
    }
}

ambient.$inject = ['$scope', '$rootScope', '$modal', 'user', 'objectproxy', 'socket', 'menu'];

export default ambient;
