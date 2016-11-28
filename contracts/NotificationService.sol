pragma solidity ^0.4.2;

contract NotificationService {

    event ContractState(string referenceId, address buyer, address seller, uint contractState, uint price, uint bookingState, uint lastUpdated, string who);

    function contractState(string referenceId, address buyer, address seller, uint contractState, uint price, uint bookingState, uint lastUpdated, string who) {
        ContractState(referenceId, buyer, seller, contractState, price, bookingState, lastUpdated, who);
    }
}
