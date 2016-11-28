pragma solidity ^0.4.0;

contract NotificationService {
  function contractState(string referenceId, address buyer, address seller, uint contractState, uint price, uint bookingState, uint lastUpdated, string who);
}

contract usingNotificationService {
    address constant NOTIFICATION_CONTRACT_ADDRESS = 0x0Da3143A5B5116D0F5A32f62Cf68BaC06DB40CC4;

    function getNotificationService() returns (NotificationService) {
        return NotificationService(NOTIFICATION_CONTRACT_ADDRESS);
    }
}
