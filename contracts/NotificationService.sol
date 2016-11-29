pragma solidity ^0.4.2;

contract NotificationService {

    event ContractState(string referenceId, address seller, address buyer, uint buyerPrice, uint sellerPrice, int state, uint time);

    function contractState(string referenceId, address seller, address buyer, uint buyerPrice, uint sellerPrice, int state, uint time) {
        ContractState(referenceId, seller, buyer, buyerPrice, sellerPrice, state, time);
    }
}
