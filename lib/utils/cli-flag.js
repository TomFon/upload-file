"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.core = exports.commands = void 0;
exports.commands = [
    {
        name: 'init',
        type: String,
        usage: 'init',
        description: 'Initialize a new configuration'
    }
];
exports.core = [
    {
        name: 'entry',
        type: String,
        defaultValue: 'happy-deploy.json',
        description: 'the config file of your application'
    },
    {
        name: 'host',
        type: String,
        required: true,
        description: 'server ip address'
    },
    {
        name: 'port',
        type: String,
        defaultValue: '22',
        required: true,
        description: 'server port'
    },
    {
        name: 'username',
        type: String,
        alias: 'u',
        required: true,
        description: 'server username'
    },
    {
        name: 'password',
        type: String,
        alias: 'p',
        required: true,
        description: 'server password'
    },
    {
        name: 'localPath',
        type: String,
        alias: 'l',
        required: true,
        description: 'local file path'
    },
    {
        name: 'remotePath',
        type: String,
        alias: 'r',
        required: true,
        description: 'remote file path'
    },
    {
        name: 'subdir',
        alias: 'd',
        type: String,
        defaultValue: '',
        description: 'zip file subdir'
    }
];