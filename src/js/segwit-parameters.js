(function () {
  // p2wpkh




  libs.bitcoin.networks.litecoin.p2wpkh = {
    baseNetwork: "litecoin",
    messagePrefix: "\x19Litecoin Signed Message:\n",
    bech32: "ltc",
    bip32: {
      public: 0x04b24746,
      private: 0x04b2430c,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
  };

  libs.bitcoin.networks.litecointestnet.p2wpkh = {
    baseNetwork: "litecointestnet",
    messagePrefix: "\x19Litecoin Signed Message:\n",
    bech32: "tltc",
    bip32: {
      public: 0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  };

  libs.bitcoin.networks.litecoinregtest.p2wpkh = {
    baseNetwork: "litecoinregtest",
    messagePrefix: "\x19Litecoin Signed Message:\n",
    bech32: "rltc",
    bip32: {
      public: 0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  };

  // p2wpkh in p2sh




  libs.bitcoin.networks.litecoin.p2wpkhInP2sh = {
    baseNetwork: "litecoin",
    messagePrefix: "\x19Litecoin Signed Message:\n",
    bech32: "ltc",
    bip32: {
      public: 0x01b26ef6,
      private: 0x01b26792,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
  };

  libs.bitcoin.networks.litecointestnet.p2wpkhInP2sh = {
    baseNetwork: "litecointestnet",
    messagePrefix: "\x19Litecoin Signed Message:\n",
    bech32: "tltc",
    bip32: {
      public: 0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  };

  libs.bitcoin.networks.litecoinregtest.p2wpkhInP2sh = {
    baseNetwork: "litecoinregtest",
    messagePrefix: "\x19Litecoin Signed Message:\n",
    bech32: "rltc",
    bip32: {
      public: 0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  };

  // p2wsh




  // p2wsh in p2sh




  // bech32
})();
