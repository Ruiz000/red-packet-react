export const redPacketAbi = [
  {
    inputs: [
      { internalType: "uint64", name: "_subscriptionId", type: "uint64" },
      { internalType: "address", name: "_subscriptionAddr", type: "address" },
      { internalType: "bytes32", name: "_keyHash", type: "bytes32" },
      { internalType: "address", name: "_tokenAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "ALREADY_ATTEND",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "BALANCE_NOT_ENOUGH",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "CONTRACT_BALANCE_NOT_ENOUGH",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "FULL_USER",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "LIMIT_ERROR",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "NOT_ENOUGH_DEPOSIT",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "NOT_ENOUGH_USER",
    type: "error",
  },
  { inputs: [], name: "NOT_OWNER", type: "error" },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "NO_PACKET",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "NO_USER",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "have", type: "address" },
      { internalType: "address", name: "want", type: "address" },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "TIMES_ERROR",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "packetId",
        type: "uint256",
      },
    ],
    name: "ContinuePacket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "packetId",
        type: "uint256",
      },
    ],
    name: "EndPacket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "msg", type: "uint256" },
    ],
    name: "Log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "packetId",
        type: "uint256",
      },
    ],
    name: "StartPacket",
    type: "event",
  },
  {
    inputs: [],
    name: "_owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_deposit", type: "uint256" }],
    name: "addDeposit",
    outputs: [{ internalType: "uint256", name: "deposit", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "attendPacket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_randomWords", type: "uint256[]" },
    ],
    name: "calculatePercentages",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "string", name: "collectType", type: "string" },
      { internalType: "uint32", name: "_limit", type: "uint32" },
      { internalType: "uint8", name: "_times", type: "uint8" },
    ],
    name: "createPacket",
    outputs: [{ internalType: "uint256", name: "packetId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "generateUniqueID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "_randomWords", type: "uint256[]" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "getCountByPercent",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [{ internalType: "uint256", name: "deposit", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
    name: "getPacket",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "uint256", name: "startTime", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "string", name: "collectType", type: "string" },
          { internalType: "bool", name: "lock", type: "bool" },
          { internalType: "uint8", name: "currentTimes", type: "uint8" },
          { internalType: "uint8", name: "times", type: "uint8" },
          { internalType: "uint32", name: "limit", type: "uint32" },
          { internalType: "address[]", name: "users", type: "address[]" },
          { internalType: "address", name: "creator", type: "address" },
          { internalType: "address", name: "currentUser", type: "address" },
          { internalType: "bool", name: "exist", type: "bool" },
          { internalType: "uint256", name: "requestId", type: "uint256" },
        ],
        internalType: "struct RedPacket.Packet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_requestId", type: "uint256" }],
    name: "getRequestStatus",
    outputs: [
      { internalType: "bool", name: "fulfilled", type: "bool" },
      { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRequestId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "requestId", type: "uint256" },
      { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "requestIds",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint32", name: "numWords", type: "uint32" }],
    name: "requestRandomWords",
    outputs: [{ internalType: "uint256", name: "requestId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "s_requests",
    outputs: [
      { internalType: "bool", name: "fulfilled", type: "bool" },
      { internalType: "bool", name: "exists", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawContractBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
