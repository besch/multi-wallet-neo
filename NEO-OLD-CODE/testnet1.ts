const Neo = require('@cityofzion/neo-js')

const node = new Neo({ 
    network: 'testnet',
    storageOptions: {
        model: 'mongoDB'
    }
})

// console.log('node', node);


// node.mesh.on('ready', () => {
//     node.mesh.rpc('getBlock', 1000)
//         .then(res => console.log('Mainnet getBlock(1000).hash:', res.hash))
// })

// node.storage.getBlockCount()
//     .then(res => console.log('Block count:', res))

node.mesh.rpc('getBlock', 1000)