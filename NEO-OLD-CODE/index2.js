#!/usr/bin/env node

/**
 * Blockchain Syncing Example
 *
 * An actual syncing usage to populate local running MongoDB server.
 */

// -- Bootstrap
var fs = require('fs');
const Node = require('@cityofzion/neo-js')

// -- Chain of command

async function main() {
    console.log('== Test Syncing Example ==')

    // Instantiate a testnet node with local storage
    const options = {
        network: 'testnet',
        storage: {
            model: 'mongoDB'
        }
    }

    // By initiating the Node class, the synchronization begins on its own.
    const node = new Node(options)
    console.log('node.network:', node.network)
    fs.appendFile('output.json', `${JSON.stringify(node)}\r\n`)

    // Check for current syncing progress every 30 seconds
    console.log(`[${new Date()}] Start syncing...`)
    setInterval(async() => {
        let output = `[${new Date()}] block count: ${await node.storage.getBlockCount()}`
            // console.log(`[${new Date()}] block count:`, await node.storage.getBlockCount())
        fs.appendFile('output.json', JSON.stringify(output))
    }, 300000000000000)
}

// -- Execute

main()