/**
 * Allows the Chat sense to output to the chat channel.
 */

public interface ChatListener {
	public void sendMessage(ChatEvent message);/*
	[try] public void sendError(ChatEvent message);
    // {4F23886F-F090-4A6A-8DC4-47B02F65C9E4}
    IMPLEMENT_OLECREATE(<<class>>, <<external_name>>, 
0x4f23886f, 0xf090, 0x4a6a, 0x8d, 0xc4, 0x47, 0xb0, 0x2f, 0x65, 0xc9, 0xe4);
else
        // {D7C8D40A-CE81-4BE4-8A68-96D27B40CB67}
IMPLEMENT_OLECREATE(<<class>>, <<external_name>>, 
0xd7c8d40a, 0xce81, 0x4be4, 0x8a, 0x68, 0x96, 0xd2, 0x7b, 0x40, 0xcb, 0x67);
end*/

        public class ChatOutput : ChatListener
    {
    public void sendMessage(ChatEvent message)
        {
        // Send the message to the chat channel
    }
    public void sendError(ChatEvent message)
        {
        // Send the error message to the chat channel
    }
    }

    public class ChatEvent
    { }
}