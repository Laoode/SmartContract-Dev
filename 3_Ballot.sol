pragma solidity ^0.4.17; //Spesifikasi versi solidity

contract Inbox { //Defini Contract sama kek buat class di python
    string public message; //Deklarasi variable

    function Inbox(string InitialMessage) public { //Konstraktor
        message = InitialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string){
        return message;
    } 
}
