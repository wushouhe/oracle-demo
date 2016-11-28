pragma solidity ^0.4.0;

import 'NotificationAPI.sol'

contract Example is usingNotificationService {

    NotificationService ns = getNotificationService();

    function Example(string name) {
        ns.sendMsg(msg.sender, name);
    }

    function sendEvent(string name) {
        ns.sendMsg(msg.sender, name);
    }
}
