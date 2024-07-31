pragma solidity ^0.4.17; 

contract Inbox {
    string public message; 

    function Inbox(string InitialMessage) public { //Konstraktor
        message = InitialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
