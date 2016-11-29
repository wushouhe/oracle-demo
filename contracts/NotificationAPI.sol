pragma solidity ^0.4.0;

contract NotificationService {
  function contractState(string referenceId, address seller, address buyer, uint buyerPrice, uint sellerPrice, int state, uint time);
}

contract usingNotificationService {
    address constant NOTIFICATION_CONTRACT_ADDRESS = 0x42Bba4A8D2db61117F6e7c30FE061BC76D0EBEa5;

    function getNotificationService() returns (NotificationService) {
        return NotificationService(NOTIFICATION_CONTRACT_ADDRESS);
    }
}
