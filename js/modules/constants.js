export const GETH_RPC_PATH = 'http://192.168.99.100:8545';
export const DMAIL_ABI = [{"constant":false,"inputs":[],"name":"clearInbox","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"mailHash","type":"string"}],"name":"sendMail","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getArchiveAddress","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getInboxLength","outputs":[{"name":"inboxLength","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"archiveAddress","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newArchiveAddress","type":"string"}],"name":"updateArchiveAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"getMail","outputs":[{"name":"sender","type":"address"},{"name":"mailHash","type":"string"},{"name":"timestamp","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mailHash","type":"string"}],"name":"ReceivedMail","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"archiveHash","type":"string"}],"name":"ArchiveAddressUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"NewMailArchived","type":"event"}];

export const DMAIL_BYTECODE = "0x6060604052600080546c0100000000000000000000000033810204600160a060020a03199091161790556109cd806100376000396000f3606060405236156100775760e060020a6000350463056e7e39811461007c5780632bb2f3bc1461009f57806341c0e1b514610124578063843a07ce146101475780638da5cb5b14610178578063b4ff1dfa1461018f578063c3450c5e146101b3578063cac153a814610217578063dcc5330514610281575b610002565b34610002576102bb60005433600160a060020a039081169116146103de57610497565b34610002576102bb6004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965050505050505060028054600181018083558281838015829011610570576003028160030283600052602060002091820191016105709190610634565b34610002576102bb60005433600160a060020a039081169116146106c957610497565b34610002576102bd604080516020810190915260008082525433600160a060020a039081169116146106d757610764565b346100025761032b600054600160a060020a031681565b34610002576103476000805433600160a060020a0390811691161461076757610764565b34610002576102bd60018054604080516020601f60026000196101008789161502019095169490940493840181900481028201810190925282815292919083018282801561079b5780601f106107705761010080835404028352916020019161079b565b34610002576102bb6004808035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965050505050505060005433600160a060020a039081169116146107a35761056d565b3461000257610359600435604080516020810190915260008082528054909190829033600160a060020a039081169116146108bd576109c6565b005b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561031d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051600160a060020a039092168252519081900360200190f35b60408051918252519081900360200190f35b6040518084600160a060020a03168152602001806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103ce5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6002805460008083559190915261046c906003027f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b808211156104c7578054600160a060020a031916815560018082018054600080835592600260001991831615610100029190910190911604601f81901061049957505b505060006002820155600301610418565b506040517f591645ed5e3a4d90360643510adaa5877a81877d7f7d33f56ec94a932e35b1bb90600090a15b565b601f01602090049060005260206000209081019061045b91905b808211156104c757600081556001016104b3565b5090565b5050604082015181600201600050555050507f8e877ba6228c39949f1aa1141be18369e7d67521544ce5f919c2239c228adaa28160405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561055f5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15b50565b5050509190906000526020600020906003020160005060408051606081018252338082526020808301879052429383019390935283546c0100000000000000000000000091820291909104600160a060020a031990911617835584516001808501805460008281528690209496959194601f6002600019958416156101000295909501909216939093048101829004830193929189019083901061069957805160ff19168380011785555b506104cb9291506104b3565b5050600060028201556003015b808211156104c7578054600160a060020a031916815560018082018054600080835592600260001991831615610100029190910190911604601f81901061067b5750610627565b601f01602090049060005260206000209081019061062791906104b3565b8280016001018555821561061b579182015b8281111561061b5782518260005055916020019190600101906106ab565b600054600160a060020a0316ff5b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561075c5780601f106107315761010080835404028352916020019161075c565b820191906000526020600020905b81548152906001019060200180831161073f57829003601f168201915b505050505090505b90565b50600254610764565b820191906000526020600020905b81548152906001019060200180831161077e57829003601f168201915b505050505081565b8060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107fa57805160ff19168380011785555b5061082a9291506104b3565b828001600101855582156107ee579182015b828111156107ee57825182600050559160200191906001019061080c565b50507f0ef6c49eebf5eaf6ccfe3b49b35618872738545068e8cd6b184dc7c32cf3e3ec8160405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561055f5780820380516001836020036101000a03191681526020019150509250505060405180910390a150565b6002805485908110156100025790600052602060002090600302016000505460028054600160a060020a0390921691869081101561000257906000526020600020906003020160005060010160005060026000508681548110156100025790600052602060002090600302016000506002908101548254604080516020601f600019610100600187161502019094169590950492830185900485028101850190915281815291928491908301828280156109b85780601f1061098d576101008083540402835291602001916109b8565b820191906000526020600020905b81548152906001019060200180831161099b57829003601f168201915b505050505091509250925092505b919390925056";

export const DMAIL_SOLIDITY_SOURCE =
  `pragma solidity ^0.4.2;

  contract DMail {
    address public owner;
    string public archiveAddress;
    Mail[] private inbox;

    function DMail() {
      owner = msg.sender;
    }

    event ReceivedMail(string mailHash);
    event ArchiveAddressUpdated(string archiveHash);
    event NewMailArchived();

    struct Mail {
      address sender;
      string mailHash;
      uint timestamp;
    }

    modifier ownerOnly() {
      if (msg.sender != owner)
        return;
      _;
    }

    function sendMail(string mailHash) {
      inbox.push(Mail(msg.sender, mailHash, block.timestamp));
      ReceivedMail(mailHash);
    }

    function getInboxLength() ownerOnly constant returns (uint inboxLength) {
      return inbox.length;
    }

    function clearInbox() ownerOnly {
      delete inbox;
      NewMailArchived();
    }

    function getArchiveAddress() ownerOnly constant returns (string) {
      return archiveAddress;
    }

    function getMail(uint i) ownerOnly constant returns (address sender, string mailHash, uint timestamp) {
      return (inbox[i].sender, inbox[i].mailHash, inbox[i].timestamp);
    }

    function updateArchiveAddress(string newArchiveAddress) ownerOnly {
      archiveAddress = newArchiveAddress;
      ArchiveAddressUpdated(newArchiveAddress);
    }

    // Kill contract and return funds to owner
    function kill() ownerOnly {
      suicide(owner);
    }
  }`;

export const routes = {
  INBOX: 'inbox',
  DRAFTS: 'drafts',
  SETTINGS: 'settings',
};

export const SIDEBAR_LINKS = [
  {
    route: routes.INBOX,
    text: 'Inbox',
  },
  {
    route: routes.DRAFTS,
    text: 'Drafts',
  }
];
