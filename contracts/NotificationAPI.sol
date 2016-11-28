pragma solidity ^0.4.0;

contract NotificationService {

}

contract usingNotificationService {
    address constant NOTIFICATION_CONTRACT_ADDRESS = ;

    function getNotificationService() returns (NotificationService) {
        return NotificationService(NOTIFICATION_CONTRACT_ADDRESS);
    }
}
