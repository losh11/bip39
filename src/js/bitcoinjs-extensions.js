libs.bitcoin.networks.litecoin = {
  messagePrefix: "\x19Litecoin Signed Message:\n",
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0,
};

libs.bitcoin.networks.litecoinXprv = {
  messagePrefix: "\x19Litecoin Signed Message:\n",
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0,
};

libs.bitcoin.networks.litecointestnet = {
  messagePrefix: "\x19Litecoin Signed Message:\n",
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

libs.bitcoin.networks.litecoinregtest = {
  messagePrefix: "\x19Litecoin Signed Message:\n",
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

