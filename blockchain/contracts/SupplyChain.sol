pragma solidity >=0.4.21 <0.6.0;

contract SupplyChain {

    /*
    Roles enumerations
    1 - Farmer
    2 - Sourcer
    3 - Exporter
    4 - Importer
    5 - Retailer
    */

    uint256 batchCounter;

    struct Batch {
        mapping (address => uint8) userRoles;
    }

    event BatchUpdate(address user, uint256 batchID, uint8 role);

    mapping (uint256 => Batch) batchMap;

    constructor() public {
        batchCounter = 0;
    }

    function getRole (uint256 batchID, address user) external view returns (uint8) {
        return batchMap[batchID].userRoles[user];
    }

    function startNewBatch(uint8 role) public returns (bool) {
        emit BatchUpdate(msg.sender, batchCounter, role);
        batchMap[batchCounter++].userRoles[msg.sender] = role;
    }
}