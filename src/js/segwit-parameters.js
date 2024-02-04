(function() {

// p2wpkh

libs.bitcoin.networks.bitcoin.p2wpkh = {
    baseNetwork: "bitcoin",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x04b24746,
        private: 0x04b2430c
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
};

libs.bitcoin.networks.testnet.p2wpkh = {
    baseNetwork: "testnet",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x045f1cf6,
        private: 0x045f18bc
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

libs.bitcoin.networks.regtest.p2wpkh = {
    baseNetwork: "regtest",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
        public: 0x045f1cf6,
        private: 0x045f18bc
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

libs.bitcoin.networks.litecoin.p2wpkh = {
    baseNetwork: "litecoin",
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
        public: 0x04b24746,
        private: 0x04b2430c
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
};

libs.bitcoin.networks.litecointestnet.p2wpkh = {
    baseNetwork: "litecointestnet",
	messagePrefix: '\x19Litecoin Signed Message:\n',
	bech32: 'tltc',
	bip32: {
		public: 0x043587cf,
		private: 0x04358394
	},
	pubKeyHash: 0x6f,
	scriptHash: 0xc4,
	wif: 0xef
};

libs.bitcoin.networks.litecoinregtest.p2wpkh = {
    baseNetwork: "litecoinregtest",
	messagePrefix: '\x19Litecoin Signed Message:\n',
	bech32: 'rltc',
	bip32: {
		public: 0x045f1cf6,
		private: 0x045f18bc
	},
	pubKeyHash: 0x6f,
	scriptHash: 0xc4,
	wif: 0xef
};

// p2wpkh in p2sh

libs.bitcoin.networks.bitcoin.p2wpkhInP2sh = {
    baseNetwork: "bitcoin",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x049d7cb2,
        private: 0x049d7878
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
};

libs.bitcoin.networks.testnet.p2wpkhInP2sh = {
    baseNetwork: "testnet",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x044a5262,
        private: 0x044a4e28
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

libs.bitcoin.networks.regtest.p2wpkhInP2sh = {
    baseNetwork: "regtest",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
        public: 0x044a5262,
        private: 0x044a4e28
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

libs.bitcoin.networks.litecoin.p2wpkhInP2sh = {
    baseNetwork: "litecoin",
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
        public: 0x01b26ef6,
        private: 0x01b26792
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
};

libs.bitcoin.networks.litecointestnet.p2wpkhInP2sh = {
	baseNetwork: "litecointestnet",
	messagePrefix: '\x19Litecoin Signed Message:\n',
	bech32: 'tltc',
	bip32: {
		public: 0x043587cf,
		private: 0x04358394
	},
	pubKeyHash: 0x6f,
	scriptHash: 0xc4,
	wif: 0xef
};

libs.bitcoin.networks.litecoinregtest.p2wpkhInP2sh = {
	baseNetwork: "litecoinregtest",
	messagePrefix: '\x19Litecoin Signed Message:\n',
	bech32: 'rltc',
	bip32: {
		public: 0x044a5262,
		private: 0x044a4e28
	},
	pubKeyHash: 0x6f,
	scriptHash: 0xc4,
	wif: 0xef
};

// p2wsh

libs.bitcoin.networks.bitcoin.p2wsh = {
    baseNetwork: "bitcoin",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x02aa7ed3,
        private: 0x02aa7a99
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
};

libs.bitcoin.networks.testnet.p2wsh = {
    baseNetwork: "testnet",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x02575483,
        private: 0x02575048
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

libs.bitcoin.networks.regtest.p2wsh = {
    baseNetwork: "regtest",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
        public: 0x02575483,
        private: 0x02575048
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

// p2wsh in p2sh

libs.bitcoin.networks.bitcoin.p2wshInP2sh = {
    baseNetwork: "bitcoin",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x0295b43f,
        private: 0x0295b005
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
};

libs.bitcoin.networks.testnet.p2wshInP2sh = {
    baseNetwork: "testnet",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x024289ef,
        private: 0x024285b5
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

libs.bitcoin.networks.regtest.p2wshInP2sh = {
    baseNetwork: "regtest",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
        public: 0x024289ef,
        private: 0x024285b5
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

// bech32

})();
